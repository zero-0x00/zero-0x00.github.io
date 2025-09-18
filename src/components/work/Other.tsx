'use client';

import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

import Tooltip from '@ui/Tooltip';
import TooltipList from '@ui/TooltipList';
import TooltipListItem from '@ui/TooltipListItem';
import WorkTimelineItem from '@ui/WorkTimelineItem';

const Other = () => {
  return (
    <WorkTimelineItem
      period="Октябрь 2009 — Январь 2016"
      company="Прочие проекты"
      position="Junior Frontend Developer"
      logo={<WorkHistoryIcon fontSize={'large'} />}
      isLast={true}
      className={'section'}
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
              Автоматизировал процессы тестирования и деплоя, что позволило
              команде быстрее выпускать новые версии продуктов и снизить
              количество ошибок на продакшн.
            </>
          }
        />

        <TooltipListItem
          text={
            <>
              Внедрил современные подходы к разработке UI, что повысило качество
              интерфейсов и упростило поддержку проектов.
            </>
          }
        />
      </TooltipList>
    </WorkTimelineItem>
  );
};

export default Other;
