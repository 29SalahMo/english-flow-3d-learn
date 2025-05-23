
import { motion } from "framer-motion";
import { Image } from "lucide-react";

type Props = {
  src: string;
  alt?: string;
  label?: string;
  link?: string;
};

const placeholder =
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80";

export default function InteractiveImage({ src, alt = "Interactive", label, link }: Props) {
  const content = (
    <motion.div
      className="relative rounded-xl overflow-hidden shadow-lg bg-[#1d1336] hover:shadow-xl group"
      whileHover={{ scale: 1.05, rotate: -1 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={src || placeholder}
        alt={alt}
        className="w-full h-44 object-cover group-hover:brightness-110 transition"
        draggable={false}
      />
      {label && (
        <span className="absolute bottom-2 left-2 bg-[#3c2067]/70 px-3 py-1 text-sm rounded text-purple-200 font-medium drop-shadow-md">
          <Image className="inline-block mr-1" size={16} /> {label}
        </span>
      )}
    </motion.div>
  );
  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">{content}</a>
  ) : content;
}
