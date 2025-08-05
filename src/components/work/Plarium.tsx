import PlariumLogoDark from '@assets/plarium_dark.svg';
import PlariumLogoLight from '@assets/plarium_light.svg';
import CustomTooltip from '@ui/CustomTooltip';
import TooltipList from '@ui/TooltipList';
import TooltipListItem from '@ui/TooltipListItem';
import WorkTimelineItem from '@ui/WorkTimelineItem';
import { useIsDarkMode } from '@ui/theme/useIsDarkMode';

const Plarium = () => {
  const isDarkMode = useIsDarkMode();
  return (
    <WorkTimelineItem
      period="Февраль 2016 — Октябрь 2017"
      company="Plarium"
      position="Middle Frontend Developer"
      logo={isDarkMode ? <PlariumLogoDark /> : <PlariumLogoLight />}
    >
      <TooltipList>
        <TooltipListItem
          text={
            <>
              Спикер конференции{' '}
              <CustomTooltip title="Крупнейшая JavaScript-конференция в Украине, объединяющая фронтенд-разработчиков">
                <span className="term">KharkivJS</span>
              </CustomTooltip>{' '}
              по вопросам UX и UI в веб-приложениях.
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Оптимизировал трансформации данных в NodeJS API Gateway, создав
              open-source библиотеку
              <CustomTooltip title="Библиотека для преобразования и фильтрации данных API на лету">
                <span className="term">apop</span>
              </CustomTooltip>
            </>
          }
        />

        <TooltipListItem text="Провел аналитическое исследование конфликтов permissions пользователей в проекте." />

        <TooltipListItem
          text={
            <>
              Участвовал в разработке проекта для аналитики маркетинговых
              кампаний, используя
              <CustomTooltip title="Инструмент для быстрого создания React-приложений без необходимости настройки окружения">
                <span className="term">Create React App</span>
              </CustomTooltip>
              и
              <CustomTooltip title="Сборщик модулей JavaScript, который создает бандлы для веб-приложений">
                <span className="term">Webpack</span>
              </CustomTooltip>
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Внедрил в команду принципы
              <CustomTooltip title="You Aren't Gonna Need It - Не создавайте функциональность заранее, пока она не нужна">
                <span className="term">YAGNI</span>
              </CustomTooltip>
              <CustomTooltip title="Don't Repeat Yourself - Избегайте дублирования кода, выделяйте повторяющиеся части в отдельные компоненты">
                <span className="term">DRY</span>
              </CustomTooltip>
              и
              <CustomTooltip title="Keep It Simple, Stupid - Сохраняйте простоту и избегайте лишней сложности">
                <span className="term">KISS</span>
              </CustomTooltip>
              . Очистил сложно-читаемый Legacy код из бизнес логики.
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Разработал
              <CustomTooltip title="Progressive Web App - веб-приложение, которое работает как нативное мобильное приложение с возможностью офлайн-работы">
                <span className="term">PWA</span>
              </CustomTooltip>
              приложение для управления финансовыми документами на базе
              <CustomTooltip title="JavaScript-библиотека для создания пользовательских интерфейсов">
                <span className="term">React</span>
              </CustomTooltip>
            </>
          }
        />
      </TooltipList>
    </WorkTimelineItem>
  );
};

export default Plarium;
