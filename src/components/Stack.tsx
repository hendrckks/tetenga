import React from 'react';

// Define interface for stack items
interface StackItem {
  title: string;
  description: string;
}

// Data structure for stack items
const stackItems: StackItem[] = [
  {
    title: 'Notion',
    description: 'Personal and Business Management',
  },
  {
    title: 'Cal.com',
    description: 'Booking and Calls',
  },
  {
    title: 'X',
    description: 'Networking and Design Inspirations',
  },
  {
    title: 'Cosmos',
    description: 'Design Inspirations',
  },
  {
    title: 'Firebase',
    description: 'Backend Operations',
  },
  {
    title: 'Airtable',
    description: 'Database and Collaborations Management',
  },
  {
    title: 'Git',
    description: 'Version Control',
  },
  {
    title: 'React + Ts + Tailwind Css',
    description: 'Frontend Development',
  },
];

// Card component with proper type definitions
const StackCard: React.FC<StackItem> = ({ title, description }) => (
  <div className="lg:p-4 p-6 cursor-pointer flex flex-col gap-2 bg-[#0f0f0f] rounded-lg">
    <p className="text-base font-medium text-white/90">{title}</p>
    <p className="text-sm text-[#b4b3b1]">{description}</p>
  </div>
);

// Main Stack component
const Stack: React.FC = () => {
  return (
    <div className="w-full lg:px-0 px-3 py-20">
      <div>
        <h3 className="text-xl font-medium text-white/90">Stack</h3>
        <p className="text-sm text-white/50">
          Software and services I use in my workflow.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 mt-5 gap-2">
        {stackItems.map((item, index) => (
          <StackCard
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Stack;
