import PlariumLogoDark from '@assets/plarium_dark.svg';
import PlariumLogoLight from '@assets/plarium_light.svg';
import Tooltip from '@ui/Tooltip';
import TooltipList from '@ui/TooltipList';
import TooltipListItem from '@ui/TooltipListItem';
import WorkTimelineItem from '@ui/WorkTimelineItem';
import { useIsDarkMode } from '@ui/theme/useIsDarkMode';

const Plarium = () => {
  const isDarkMode = useIsDarkMode();
  return (
    <WorkTimelineItem
      period="Февраль 2016 — Октябрь 2017"
      company="GoGame in Plarium"
      companyTooltip="Plarium — международная компания-разработчик мобильных и браузерных игр, основанная в 2009 году в Харькове (Украина). Создает стратегии, RPG и MMO игры. С 2017 года является частью австралийской корпорации Aristocrat Leisure Limited. C 2025 года вошла в состав группы компаний MTG"
      position="Middle Frontend Developer"
      logo={isDarkMode ? <PlariumLogoDark /> : <PlariumLogoLight />}
    >
      <TooltipList>
        <TooltipListItem
          text={
            <>
              Спикер конференции{' '}
              <Tooltip title="Крупнейшая JavaScript-конференция в Украине, объединяющая фронтенд-разработчиков">
                <span className="term">KharkivJS</span>
              </Tooltip>{' '}
              по вопросам UX и UI в веб-приложениях.
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Оптимизировал трансформации данных в NodeJS API Gateway, создав
              open-source библиотеку
              <Tooltip title="Библиотека для преобразования и фильтрации данных API на лету">
                <span className="term">apop</span>
              </Tooltip>
            </>
          }
        />

        <TooltipListItem text="Провел аналитическое исследование конфликтов permissions пользователей в проекте." />

        <TooltipListItem
          text={
            <>
              Участвовал в разработке проекта для аналитики маркетинговых
              кампаний, используя
              <Tooltip title="Инструмент для быстрого создания React-приложений без необходимости настройки окружения">
                <span className="term">Create React App</span>
              </Tooltip>
              и
              <Tooltip title="Сборщик модулей JavaScript, который создает бандлы для веб-приложений">
                <span className="term">Webpack</span>
              </Tooltip>
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Внедрил в команду принципы
              <Tooltip title="You Aren't Gonna Need It - Не создавайте функциональность заранее, пока она не нужна">
                <span className="term">YAGNI</span>
              </Tooltip>
              <Tooltip title="Don't Repeat Yourself - Избегайте дублирования кода, выделяйте повторяющиеся части в отдельные компоненты">
                <span className="term">DRY</span>
              </Tooltip>
              и
              <Tooltip title="Keep It Simple, Stupid - Сохраняйте простоту и избегайте лишней сложности">
                <span className="term">KISS</span>
              </Tooltip>
              . Очистил сложно-читаемый Legacy код из бизнес логики.
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Разработал
              <Tooltip title="Progressive Web App - веб-приложение, которое работает как нативное мобильное приложение с возможностью офлайн-работы">
                <span className="term">PWA</span>
              </Tooltip>
              приложение для управления финансовыми документами на базе
              <Tooltip title="JavaScript-библиотека для создания пользовательских интерфейсов">
                <span className="term">React</span>
              </Tooltip>
            </>
          }
        />
      </TooltipList>
    </WorkTimelineItem>
  );
};

export default Plarium;
