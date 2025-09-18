'use client';

import { useEffect, useRef } from 'react';

import PrintIcon from '@mui/icons-material/Print';
import Fab from '@mui/material/Fab';

import resumePDFUrl from '@assets/resume.pdf';
import { useIsMobile } from '@hooks/useIsMobile';
import { useIsPrintMode } from '@hooks/useIsPrintMode';

// Клиентские компоненты с интерактивностью
export default function ClientInteractions() {
  const isPrintMode = useIsPrintMode();
  const isMobile = useIsMobile();
  const consoleLogged = useRef(false);

  useEffect(() => {
    // Выполняем console.log только один раз
    if (!consoleLogged.current) {
      console.log(
        '%cПривет, исследователь 👋\nПоймал тебя за инспектором кода 😏\nЭтот сайт — моё резюме. Если ты здесь, скорее всего, тебя заставил HR.😎\nЛюблю, когда люди копаются под капотом. Исходники можешь найти тут: https://github.com/zero-0x00/zero-0x00.github.io.',
        'color: #00bfff; font-size: 16px;'
      );

      console.log(
        '%cЕсли будут вопросы, пиши в Телеграм 👉 https://t.me/Engineer586898',
        'color: #00ffbf; font-weight: bold;'
      );

      consoleLogged.current = true;
    }
  }, []);

  // Отдельный useEffect для печати
  useEffect(() => {
    if (isPrintMode) {
      window.print();
    }
  }, [isPrintMode]);

  const handlePrint = () => {
    window.open(resumePDFUrl, '_blank');
  };

  const isStandardView = !isPrintMode;

  return (
    <>
      {/* Кнопка печати */}
      {isStandardView && (
        <Fab
          size="small"
          color="primary"
          aria-label="print"
          onClick={handlePrint}
          sx={{
            position: 'fixed',
            bottom: '16px',
            right: 'calc(16px + 48px)',
          }}
        >
          <PrintIcon />
        </Fab>
      )}

      {/* Динамические классы */}
      <style jsx global>{`
        body {
          ${isMobile ? 'class: mobile;' : ''}
          ${isPrintMode ? 'class: print-mode;' : ''}
        }
      `}</style>
    </>
  );
}
