import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
const useIsMounted = () => {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(router.isReady)
    }, [router.isReady])
    return isMounted
}

export default useIsMounted