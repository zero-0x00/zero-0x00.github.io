import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

import Tooltip from '@ui/Tooltip';
import TooltipList from '@ui/TooltipList';
import TooltipListItem from '@ui/TooltipListItem';
import WorkTimelineItem from '@ui/WorkTimelineItem';

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
              <Tooltip title="Content Management System - Система управления контентом, позволяющая создавать и редактировать цифровой контент">
                <span className="term">CMS</span>
              </Tooltip>{' '}
              на
              <Tooltip title="Язык программирования, используемый для создания веб-приложений">
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
              <Tooltip title="Система управления взаимоотношениями с клиентами">
                <span className="term">CRM</span>
              </Tooltip>
              системы нефтедобывающей компании.
            </>
          }
        />

        <TooltipListItem text="Создал веб-сайт с возможностью оформления документов для компании юридической помощи." />

        <TooltipListItem
          text={
            <>
              Занимался разработкой
              <Tooltip title="Пользовательский интерфейс">
                <span className="term">UI</span>
              </Tooltip>
              для нескольких лендингов используя
              <Tooltip title="Язык разметки веб-страниц">
                <span className="term">HTML</span>
              </Tooltip>
              ,
              <Tooltip title="Язык таблиц стилей для описания внешнего вида документа">
                <span className="term">CSS</span>
              </Tooltip>
              и
              <Tooltip title="Язык программирования, используемый для создания интерактивных элементов на веб-страницах">
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
