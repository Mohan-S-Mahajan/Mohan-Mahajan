import React, { useEffect, useState, useRef, useId } from 'react';

const DEFAULT_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=~[]{}|;:,.<>?/§¶ΔΞΩ';

export interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxDuration?: number;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: 'view' | 'hover';
  once?: boolean;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
}

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 30,
  maxDuration = 1000,
  characters = DEFAULT_CHARACTERS,
  className = '',
  parentClassName = '',
  encryptedClassName = 'text-court-gold font-mono',
  animateOn = 'view',
  once = true,
  sequential = true,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [decryptedIndices, setDecryptedIndices] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasRunRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const uniqueId = useId();

  const getAvailableCharacters = () => {
    if (useOriginalCharsOnly) {
      return Array.from(new Set(text.replace(/\s/g, ''))).join('');
    }
    return characters;
  };

  const startDecryption = () => {
    if (once && hasRunRef.current) return;
    hasRunRef.current = true;

    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsDecrypted(false);

    const availableChars = getAvailableCharacters();
    const charsArray = text.split('');
    const totalChars = charsArray.length;
    const startTime = performance.now();
    const newDecryptedIndices = new Set<number>();

    // Pre-mark whitespace
    charsArray.forEach((char, idx) => {
      if (char === ' ' || char === '\n') {
        newDecryptedIndices.add(idx);
      }
    });

    intervalRef.current = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / maxDuration, 1);

      if (sequential) {
        const resolvedCount = Math.floor(progress * totalChars);

        if (revealDirection === 'start') {
          for (let i = 0; i < resolvedCount; i++) {
            newDecryptedIndices.add(i);
          }
        } else if (revealDirection === 'end') {
          for (let i = totalChars - 1; i >= totalChars - resolvedCount; i--) {
            newDecryptedIndices.add(i);
          }
        } else if (revealDirection === 'center') {
          const middle = Math.floor(totalChars / 2);
          const half = Math.floor(resolvedCount / 2);
          for (let i = middle - half; i <= middle + half; i++) {
            if (i >= 0 && i < totalChars) newDecryptedIndices.add(i);
          }
        }
      } else {
        charsArray.forEach((char, idx) => {
          if (char === ' ' || char === '\n') return;
          if (Math.random() < progress) {
            newDecryptedIndices.add(idx);
          }
        });
      }

      setDecryptedIndices(new Set(newDecryptedIndices));

      if (progress >= 1 || newDecryptedIndices.size >= totalChars) {
        setDisplayText(text);
        setIsDecrypted(true);
        if (intervalRef.current) clearInterval(intervalRef.current);
        return;
      }

      const scrambled = charsArray
        .map((char, index) => {
          if (char === ' ' || char === '\n') return char;
          if (newDecryptedIndices.has(index)) return char;
          return availableChars[Math.floor(Math.random() * availableChars.length)];
        })
        .join('');

      setDisplayText(scrambled);
    }, speed);
  };

  useEffect(() => {
    if (animateOn === 'hover') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!hasRunRef.current || !once)) {
          startDecryption();
          if (once && containerRef.current) {
            observer.unobserve(containerRef.current);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, animateOn, once]);

  const handleMouseEnter = () => {
    if (animateOn === 'hover' && (!once || !hasRunRef.current)) {
      startDecryption();
    }
  };

  return (
    <span
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      className={`inline-block cursor-default select-none ${parentClassName}`.trim()}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className={className}>
        {displayText.split('').map((char, index) => {
          const isDecryptedChar = isDecrypted || decryptedIndices.has(index) || char === ' ' || char === '\n';
          return (
            <span
              key={`${uniqueId}-${index}`}
              className={isDecryptedChar ? '' : `${encryptedClassName} animate-pulse`}
            >
              {char}
            </span>
          );
        })}
      </span>
    </span>
  );
};

export default DecryptedText;
