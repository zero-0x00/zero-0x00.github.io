import Tooltip from '@mui/material/Tooltip';
import TooltipList from '../common/TooltipList';
import TooltipListItem from '../common/TooltipListItem';
import WorkTimelineItem from '../common/WorkTimelineItem';
import PlariumLogo from '../../assets/plarium.svg';

const Plarium = () => {
  return (
    <WorkTimelineItem
      period="Февраль 2016 — Октябрь 2017"
      company="Plarium"
      position="Middle Frontend Developer"
      logo={<PlariumLogo />}
    >
      <TooltipList>
        <TooltipListItem
          text={
            <>
              Выступил на конференции
              <Tooltip
                title="Крупнейшая JavaScript-��онференция в Украине, объединяющая фронтенд-разработчиков"
                arrow
              >
                <span className="term">KharkivJS</span>
              </Tooltip>
              с докладом про UX и UI в веб-приложениях
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Обеспечил прозрачность трансформации данных в NodeJS API Gateway,
              создав open-source библиотеку
              <Tooltip
                title="Библиотека для преобразования и фильтрации данных API на лету"
                arrow
              >
                <span className="term">apop</span>
              </Tooltip>
              , которая позволяет легко и быстро преобразовывать данные в нужный
              формат
            </>
          }
        />

        <TooltipListItem text="Провел аналитическое исследование конфликтов permissions пользователей в проекте." />

        <TooltipListItem
          text={
            <>
              Участвовал в разработке проекта для аналитики маркетинговых
              кампаний, используя
              <Tooltip
                title="Инструмент для быстрого создания React-приложений без необходимости настройки окружения"
                arrow
              >
                <span className="term">Create React App</span>
              </Tooltip>
              и
              <Tooltip
                title="Сборщик модулей JavaScript, который создает бандлы для веб-приложений"
                arrow
              >
                <span className="term">Webpack</span>
              </Tooltip>
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Внедрил в команду принципы
              <Tooltip
                title="You Aren't Gonna Need It - Не создавайте функциональность заранее, пока она не нужна"
                arrow
              >
                <span className="term">YAGNI</span>
              </Tooltip>
              <Tooltip
                title="Don't Repeat Yourself - Избегайте дублирования кода, выделяйте повторяющиеся части в отдельные компоненты"
                arrow
              >
                <span className="term">DRY</span>
              </Tooltip>
              и
              <Tooltip
                title="Keep It Simple, Stupid - Сохраняйте простоту и избегайте лишней сложности"
                arrow
              >
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
              <Tooltip
                title="Progressive Web App - веб-приложение, которое работает как нативное мобильное приложение с возможностью офлайн-работы"
                arrow
              >
                <span className="term">PWA</span>
              </Tooltip>
              приложение для управления финансовыми потоками на базе
              <Tooltip
                title="JavaScript-библиотека для создания пользовательских интерфейсов"
                arrow
              >
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
