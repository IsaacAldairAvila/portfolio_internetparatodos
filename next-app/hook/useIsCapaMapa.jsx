// Librerias
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const useIsCapaMapa = () => {
    const router = useRouter();
    const [loaded, setLoaded] = useState('');
    useEffect(() => {
        if (router.query.tab) {
            setLoaded(router.query.tab);
        }
        else{
            setLoaded('grafico');
        }
    }, [router])
    return loaded
}

export default useIsCapaMapa
