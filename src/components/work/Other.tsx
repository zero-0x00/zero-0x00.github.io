import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

import CustomTooltip from '@ui/CustomTooltip';
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
              <CustomTooltip title="Content Management System - Система управления контентом, позволяющая создавать и редактировать цифровой контент">
                <span className="term">CMS</span>
              </CustomTooltip>{' '}
              на
              <CustomTooltip title="Язык программирования, используемый для создания веб-приложений">
                <span className="term">PHP</span>
              </CustomTooltip>
              для управления контентом на сайте магазина горных велосипедов.
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Участвовал в разработке интерактивной карты для
              <CustomTooltip title="Система управления взаимоотношениями с клиентами">
                <span className="term">CRM</span>
              </CustomTooltip>
              системы нефтедобывающей компании.
            </>
          }
        />

        <TooltipListItem text="Создал веб-сайт с возможностью оформления документов для компании юридической помощи." />

        <TooltipListItem
          text={
            <>
              Занимался разработкой
              <CustomTooltip title="Пользовательский интерфейс">
                <span className="term">UI</span>
              </CustomTooltip>
              для нескольких лендингов используя
              <CustomTooltip title="Язык разметки веб-страниц">
                <span className="term">HTML</span>
              </CustomTooltip>
              ,
              <CustomTooltip title="Язык таблиц стилей для описания внешнего вида документа">
                <span className="term">CSS</span>
              </CustomTooltip>
              и
              <CustomTooltip title="Язык программирования, используемый для создания интерактивных элементов на веб-страницах">
                <span className="term">JavaScript</span>
              </CustomTooltip>
              .
            </>
          }
        />
      </TooltipList>
    </WorkTimelineItem>
  );
};

export default Other;
