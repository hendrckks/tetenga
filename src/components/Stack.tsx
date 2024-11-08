const Stack = () => {
  return (
    <div className="w-full lg:px-0 px-3 py-20">
      <div>
        <h3 className="text-xl font-medium">Stack</h3>
        <p className="text-sm text-white/50">
          Software and services I use in my workflow.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 mt-5 gap-2">
        <div className="lg:p-4 p-6 cursor-pointer flex flex-col gap-2 bg-[#0f0f0f] rounded-lg">
          <p className="text-base font-medium"> Notion</p>
          <p className="text-sm text-[#b4b3b1]">
            Personal and business management
          </p>
        </div>
        <div className="lg:p-4 p-6 cursor-pointer flex flex-col gap-2 bg-[#0f0f0f] rounded-lg">
          <p className="text-base font-medium">Cal.com</p>
          <p className="text-sm text-[#b4b3b1]">Booking and calls</p>
        </div>
        <div className="lg:p-4 p-6 cursor-pointer flex flex-col gap-2 bg-[#0f0f0f] rounded-lg">
          <p className="text-base font-medium">X</p>
          <p className="text-sm text-[#b4b3b1]">
            Networking and design inspirations
          </p>
        </div>
        <div className="lg:p-4 p-6 cursor-pointer flex flex-col gap-2 bg-[#0f0f0f] rounded-lg">
          <p className="text-base font-medium">Cosmos</p>
          <p className="text-sm text-[#b4b3b1]">Design inspirations</p>
        </div>
        <div className="lg:p-4 p-6 cursor-pointer flex flex-col gap-2 bg-[#0f0f0f] rounded-lg">
          <p className="text-base font-medium">Airtable</p>
          <p className="text-sm text-[#b4b3b1]">
            Database and Collaborations management
          </p>
        </div>
        <div className="lg:p-4 p-6 cursor-pointer flex flex-col gap-2 bg-[#0f0f0f] rounded-lg">
          <p className="text-base font-medium">React</p>
          <p className="text-sm text-white/50">Web development</p>
        </div>
      </div>
    </div>
  );
};

export default Stack;
