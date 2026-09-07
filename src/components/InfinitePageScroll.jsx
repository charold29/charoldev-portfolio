import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function InfinitePageScroll({ children }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let currentY = 0;
    let targetY = 0;
    let contentHeight = 0;
    let lastTime = performance.now();
    let animationFrameId;

    const measure = () => {
      contentHeight = wrapper.scrollHeight / 2;
    };
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(wrapper);
    measure();

    const handleWheel = (e) => {
      targetY += e.deltaY * 0.8;
    };

    let startY = 0;
    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };
    const handleTouchMove = (e) => {
      const y = e.touches[0].clientY;
      targetY += (startY - y) * 1.5;
      startY = y;
    };

    const handleKeyDown = (e) => {
      const tag = e.target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target.isContentEditable) return;

      const page = window.innerHeight * 0.9;
      switch (e.key) {
        case 'ArrowDown': targetY += 80; break;
        case 'ArrowUp':   targetY -= 80; break;
        case 'PageDown':  targetY += page; break;
        case 'PageUp':    targetY -= page; break;
        default: return;
      }
      e.preventDefault();
    };

    const update = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      const smoothing = reduceMotion ? 1 : 1 - Math.pow(0.9, dt * 60);
      currentY += (targetY - currentY) * smoothing;

      if (contentHeight > 0) {
        while (currentY >= contentHeight) {
          currentY -= contentHeight;
          targetY  -= contentHeight;
        }
        while (currentY < 0) {
          currentY += contentHeight;
          targetY  += contentHeight;
        }
      }

      wrapper.style.transform = `translate3d(0, ${-currentY}px, 0)`;
      animationFrameId = requestAnimationFrame(update);
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden" style={{ touchAction: 'none' }}>
      <div ref={wrapperRef} className="will-change-transform flex flex-col">
        {children}
        <div aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}

InfinitePageScroll.propTypes = {
  children: PropTypes.node.isRequired,
};