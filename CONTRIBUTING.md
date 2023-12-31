# Рекомендации по внесению вклада в проект

Добро пожаловать в наш проект! Мы ценим ваши усилия и вклад. Ниже представлены наши рекомендации для удобства работы с путями и использования алиасов.

## Использование алиасов для путей

Для упрощения работы с путями в нашем проекте мы настроили следующие алиасы:

- `@src`: указывает на директорию с исходным кодом проекта.
- `@resource`: указывает на директорию с ресурсами проекта.
- `@components`: указывает на директорию с компонентами.
- `@pages`: указывает на директорию с страницами.

При указании путей в ваших файлах, предлагаем использовать эти алиасы, особенно если необходимо перейти на уровень выше иерархии. Это сделает работу с путями более читаемой и предотвратит проблемы с переносимостью.

Пример использования алиасов:

```typescript
import MyComponent from '@components/MyComponent';
import ResourceHelper from '@resource/ResourceHelper';
import HomePage from '@pages/HomePage';
```

## Использование переменных из `_variables.scss`

В нашем проекте мы придерживаемся структурирования стилей и поддержания их единообразия. Для достижения этой цели необходимо строго придерживаться использования переменных, которые определены в файле `_variables.scss`. Этот файл содержит ключевые переменные, включая шрифты, цвета и другие стили, которые используются в проекте.

Для доступа к этим переменным используйте алиас пути `@src/variables`.

Пример использования переменных:

/_ Правильное использование переменных _/

```scss
.header {
  font-family: $font-helvetica-neue;
  background-color: $color-white;
}
```

### Переменные цвета

При определении переменных цвета, пожалуйста, используйте следующий формат: `$color-{цвет}`. Например:

```scss
$color-black: #000000;
```

### Переменные шрифтов

При определении переменных для шрифтов, пожалуйста, используйте следующий формат: `$font-{Имя}`. Например:

```scss
$font-helvetica-neue: 'Helvetica Neue';
```

### Именования ассетов

Для обеспечения упорядоченности и читаемости ассетов в нашем проекте мы придерживаемся стандартов именования, основанных на формате kebab case. Это помогает нам быстро идентифицировать ассеты и поддерживать структурированность в проекте.

Примеры именования ассетов:

- `background-image.jpg`
- `logo-main.svg`
- `button-primary.png`

Пожалуйста, при создании новых ассетов и при обновлении существующих, убедитесь, что имена соответствуют этому формату. Это способствует легкости в поиске и управлении ассетами.

Спасибо за соблюдение этого стандарта именования! Если у вас возникли вопросы или предложения, не стесняйтесь делиться ими с нами.

### Подключение .svg - файлов

Для интеграции `.svg` файлов в нашем проекте, мы рекомендуем использовать синтаксис `ReactComponent` для импорта и последующего использования в коде. Этот способ обеспечивает легкость в манипулировании `.svg` файлами и позволяет управлять ими как компонентами React.

Пример подключения:

```typescript
import { ReactComponent as Icon } from './assets/icon.svg';
```

Пример использования

```typescript
<Icon className="icon" />
```

Мы настоятельно рекомендуем придерживаться этого стандарта для подключения и использования .svg файлов в проекте. Это способствует читаемости кода и облегчает обслуживание иконок и других графических элементов.
