// Типы для категорий навыков
export type SkillCategory =
  | 'language'
  | 'framework'
  | 'tool'
  | 'devops'
  | 'methodology'
  | 'testing'
  | 'bugbounty';

// Обновлено с учетом доступных в MUI цветов для Chip и добавленного pending
export type SkillColorType =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | 'pending';

// Интерфейс для определения навыка
export interface SkillDefinition {
  name: string;
  category: SkillCategory;
  color?: SkillColorType;
  showIcon?: boolean;
  description?: string;
}
