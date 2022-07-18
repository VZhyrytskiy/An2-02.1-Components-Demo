// Для унификации API динамически загружаемых компонентов,
// они должны реализовывать этот интерфейс
export interface DynamicComponent {
  data: string;
  notify: () => void;
}
