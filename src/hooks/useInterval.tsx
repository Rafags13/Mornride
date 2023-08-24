
import React, { useState, useEffect, useRef } from 'react';

// creating the custom useInterval hook 
export function useInterval(callback: any, delay: any) {
    // Creating a ref 
    const savedCallback = useRef<any>(null);

    // To remember the latest callback .
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // combining the setInterval and 
    //clearInterval methods based on delay.
    useEffect(() => {
        function func() {
            if (savedCallback.current)
                savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(func, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}