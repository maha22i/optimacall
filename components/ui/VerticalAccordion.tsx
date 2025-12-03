'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useWindowSize } from '@/components/hooks/useWindowSize';
import { 
  FiClock, 
  FiAward, 
  FiSettings, 
  FiHeadphones 
} from 'react-icons/fi';

interface AccordionItem {
  id: number;
  title: string;
  Icon: React.ComponentType<{ className?: string }>;
  imgSrc: string;
  description: string;
}

const items: AccordionItem[] = [
  {
    id: 1,
    title: 'Gain de temps',
    Icon: FiClock,
    imgSrc: '/photo1.jpg',
    description: 'Libérez-vous des contraintes téléphoniques et concentrez-vous sur votre cœur de métier. Nos télésecrétaires gèrent tous vos appels avec professionnalisme, vous permettant de gagner plusieurs heures par jour et d\'augmenter significativement votre productivité.',
  },
  {
    id: 2,
    title: 'Qualité garantie',
    Icon: FiAward,
    imgSrc: '/photo2.jpg',
    description: 'Bénéficiez d\'un service d\'excellence avec des télésecrétaires formés et qualifiés. Chaque appel est traité avec le plus grand soin, dans le respect de vos consignes et de votre image de marque. Un suivi qualité continu assure la satisfaction de vos clients.',
  },
  {
    id: 3,
    title: 'Sur mesure',
    Icon: FiSettings,
    imgSrc: '/photo3.jpg',
    description: 'Chaque solution est entièrement personnalisée selon vos besoins spécifiques. Scripts sur mesure, intégration avec vos outils, horaires adaptés : nous construisons ensemble la solution parfaite pour votre entreprise.',
  },
  {
    id: 4,
    title: 'Accompagnement',
    Icon: FiHeadphones,
    imgSrc: '/photo4.jpg',
    description: 'Un conseiller dédié vous accompagne à chaque étape. De la mise en place à l\'optimisation continue, nous sommes à vos côtés pour garantir le succès de votre relation client et l\'évolution de vos besoins.',
  },
];

const panelVariants = {
  open: {
    width: '100%',
    height: '100%',
  },
  closed: {
    width: '0%',
    height: '100%',
  },
};

const panelVariantsSm = {
  open: {
    width: '100%',
    height: '300px',
  },
  closed: {
    width: '100%',
    height: '0px',
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: '0%',
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: '100%' },
};

interface PanelProps {
  open: number;
  setOpen: (id: number) => void;
  id: number;
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  imgSrc: string;
  description: string;
}

const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description }: PanelProps) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: 'vertical-lr',
          }}
          className="hidden lg:block text-xl font-light rotate-180"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>
        <div className="w-6 lg:w-full aspect-square bg-gradient-to-br from-primary to-primary-dark text-white grid place-items-center rounded-lg">
          <Icon className="w-4 h-4 lg:w-6 lg:h-6" />
        </div>
        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-6 bg-black/60 backdrop-blur-sm text-white w-full"
            >
              <p className="text-sm lg:text-base leading-relaxed">{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default function VerticalAccordion() {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="p-4 bg-gradient-to-r from-primary to-primary-dark">
      <div className="flex flex-col lg:flex-row h-fit lg:h-[500px] w-full max-w-6xl mx-auto shadow-2xl overflow-hidden rounded-lg">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              Icon={item.Icon}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
}

