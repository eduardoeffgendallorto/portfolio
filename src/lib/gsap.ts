import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

// Registro feito UMA vez, aqui. Os outros arquivos importam daqui,
// nunca direto de 'gsap', para não registrar plugin em duplicidade.
gsap.registerPlugin(ScrollTrigger, useGSAP)

export { gsap, ScrollTrigger, useGSAP }