import { useState } from "react";
import { InputBody } from "../types/shotstack";

const [src, setSrc] = useState<string>('');
const [effect, setEffect] = useState<string>('');
const [background, setBackground] = useState<string>('');
const [title, setTitle] = useState<string>('');
const [style, setStyle] = useState<string>('');
const [transitionIn, setTransitionIn] = useState<string>('');
const [transitionOut, setTransitionOut] = useState<string>('');

const inputBody: InputBody = {
    timeline: {
      soundtrack: {
        src: `${src}`,
        effect: `${effect}`,
      },
      background: `#${background}`,
      tracks: [
        {
          clips: [
            {
              asset: {
                type: 'title',
                text: `${title}`,
                style: `${style}`,
              },
              start: 0,
              length: 5,
              transition: {
                in: `${transitionIn}`,
                out: `${transitionOut}`,
              },
            },
          ],
        },
      ],
    },
    output: {
      format: 'mp4',
      resolution: 'sd',
    },
  };
  
export { inputBody };