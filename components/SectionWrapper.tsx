"use client"

import { motion } from "framer-motion"

export default function SectionWrapper({
  children,
  id,
}: {
  children: React.ReactNode
  id: string
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
      viewport={{ once: true, margin: "-80px" }}
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      {children}
    </motion.section>
  )
}
