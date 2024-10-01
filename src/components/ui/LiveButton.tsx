import { motion } from 'framer-motion';

const EnhancedPulsingLiveButton = () => {
  return (
    <div className="relative inline-flex items-center">
      <motion.div
        className="absolute inset-0 bg-[#11a720] h-[10px] w-[10px] mt-[3px] rounded-full opacity-25"
        animate={{
          scale: [1, 2.4, 1],
          opacity: [0.15, 0.2, 0.15],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="relative z-10 h-[10px] w-[10px] bg-[#11a720] rounded-full"
        animate={{
          scale: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default EnhancedPulsingLiveButton;
