import React, { FC } from 'react';
import { IJob } from '../interfaces';
import GeneralJob from './GeneralJob';
import { MutatorCallback } from 'swr/dist/types';

interface JobsProps {
  jobs: IJob[];
  mutate: (
    data?: IJob[][] | Promise<IJob[][]> | MutatorCallback<IJob[][]> | undefined,
    shouldRevalidate?: boolean | undefined,
  ) => Promise<IJob[][] | undefined>;
}

const GeneralJobs: FC<JobsProps> = ({ jobs, mutate }) => {
  return (
    <div>
      {jobs.map((job, i) => {
        return <GeneralJob key={i} job={job} mutate={mutate} />;
      })}
    </div>
  );
};

export default GeneralJobs;
