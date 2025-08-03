import Tooltip from '@mui/material/Tooltip';

import TooltipList from '../common/TooltipList';
import TooltipListItem from '../common/TooltipListItem';
import WorkTimelineItem from '../common/WorkTimelineItem';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

const Other = () => {
  return (
    <WorkTimelineItem
      period="Февраль 2014 — Январь 2016"
      company="Прочие проекты"
      position="Junior Frontend Developer"
      logo={<WorkHistoryIcon fontSize={'large'} />}
      isLast={true}
    >
      <TooltipList>
        <TooltipListItem
          text={
            <>
              Разработал, внедрил и поддерживал
              <Tooltip
                title="Content Management System - Система управления контентом, по��воляющая создавать и редактировать цифровой контент"
                arrow
              >
                <span className="term">CMS</span>
              </Tooltip>{' '}
              на
              <Tooltip
                title="Язык программирования, используемый для создания веб-приложений"
                arrow
              >
                <span className="term">PHP</span>
              </Tooltip>
              для управления контентом на сайте магазина горных велосипедов.
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Участвовал в разработке интерактивной карты для
              <Tooltip
                title="Система управления взаимоотношениями с клиентами"
                arrow
              >
                <span className="term">CRM</span>
              </Tooltip>
              системы нефтедобывающей компании.
            </>
          }
        />

        <TooltipListItem text="Создал веб сайт с возможностью оформления документов для компании юридической помощи." />

        <TooltipListItem
          text={
            <>
              Занимался разработкой
              <Tooltip title="Пользовательский интерфейс" arrow>
                <span className="term">UI</span>
              </Tooltip>
              для нескольких лендингов используя
              <Tooltip title="Язык разметки веб-страниц" arrow>
                <span className="term">HTML</span>
              </Tooltip>
              ,
              <Tooltip
                title="Язык таблиц стилей для описания внешнего вида документа"
                arrow
              >
                <span className="term">CSS</span>
              </Tooltip>
              и
              <Tooltip
                title="Язык программирования, используемый для создания интерактивных элементов на веб-страницах"
                arrow
              >
                <span className="term">JavaScript</span>
              </Tooltip>
              .
            </>
          }
        />
      </TooltipList>
    </WorkTimelineItem>
  );
};

export default Other;
