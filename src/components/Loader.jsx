import { LinearProgress } from '@mui/material';
import React from 'react';
import { useRecoilState } from 'recoil';
import { progressState } from '../store/atoms/Course';

export default function Loader() {
    const [progress,setProgress] = useRecoilState(progressState);
    
    return (
        <>
            {progress < 100 && (
                <LinearProgress color="secondary" variant="determinate" value={progress}/>
            )}
        </>
    )
}
