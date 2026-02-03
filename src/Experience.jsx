import React from 'react';

const Experience = () => {
  return (
    <section className="py-24 bg-transparent border-t border-zinc-800" id="experience">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16 border-l-2 border-blue-600 pl-6">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Log_Files</h2>
          <p className="mt-2 text-zinc-500 font-mono">Professional history.</p>
        </div>

        <div className="border-l border-zinc-800 ml-3 md:ml-0 pl-8 md:pl-0 space-y-12">
                    {/* ADD JOBS HERE*/}
          <div className="relative md:grid md:grid-cols-5 md:gap-10 mb-12">
            <div className="md:col-span-1">
              <span className="text-zinc-500 text-sm font-mono">In the Future</span>
              <h3 className="text-white font-bold mt-1">Data Engineer</h3>
              <p className="text-blue-500 text-sm">JPMorgan Chase</p>
            </div>
            
            <div className="md:col-span-4 mt-4 md:mt-0">
              <ul className="space-y-2 text-zinc-400 text-sm list-disc pl-5 marker:text-blue-500">
                <li>Dream Company</li>
                <li>6 Digit Salary</li>
              </ul>
            </div>
          </div>
          {/* END OF JOB ITEM */}
          {/* DATA INTERN ITEM */}
          <div className="relative md:grid md:grid-cols-5 md:gap-10">
            <div className="md:col-span-1">
              <span className="text-zinc-500 text-sm font-mono">2025 - Present</span>
              <h3 className="text-white font-bold mt-1">Data Intern</h3>
              <p className="text-blue-500 text-sm">Union Digital Bank</p>
            </div>
            
            <div className="md:col-span-4 mt-4 md:mt-0">
              <ul className="space-y-2 text-zinc-400 text-sm list-disc pl-5 marker:text-blue-500">
                <li>Deployed serverless data pipelines using <span className="text-zinc-200">AWS Lambda</span> and Redshift.</li>
                <li>Created SQL-based data quality checks to detect invalid formats.</li>
                <li>Optimised ETL workflows in Snowflake and DynamoDB.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Experience;