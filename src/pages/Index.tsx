import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

type ColorMode = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';

const Index = () => {
  const [colorMode, setColorMode] = useState<ColorMode>('normal');

  const modes = [
    { id: 'normal', name: 'Обычный режим', icon: 'Eye' },
    { id: 'protanopia', name: 'Протанопия', icon: 'Eye' },
    { id: 'deuteranopia', name: 'Дейтеранопия', icon: 'Eye' },
    { id: 'tritanopia', name: 'Тританопия', icon: 'Eye' }
  ];

  const handleModeChange = (mode: ColorMode) => {
    setColorMode(mode);
    const root = document.documentElement;
    root.className = mode === 'normal' ? '' : mode;
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b-4 border-black bg-white">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-black">Сайт для людей с дальтонизмом</h1>
          <p className="text-lg text-black mt-2">Адаптивный интерфейс с безопасной палитрой цветов</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 border-b-2 border-black pb-2">
            Выберите режим восприятия цвета
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {modes.map((mode) => (
              <Card
                key={mode.id}
                className={`cursor-pointer transition-all border-2 ${
                  colorMode === mode.id
                    ? 'border-primary bg-primary/10'
                    : 'border-black hover:border-secondary'
                }`}
                onClick={() => handleModeChange(mode.id as ColorMode)}
              >
                <CardHeader>
                  <div className="flex items-center justify-center mb-2">
                    <Icon name={mode.icon} size={32} className="text-black" />
                  </div>
                  <CardTitle className="text-center text-black">{mode.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 border-b-2 border-black pb-2">
            Принципы доступного дизайна
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-black">
                  <Icon name="Palette" size={24} />
                  Безопасная палитра
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black">
                  Использование синего и серого цветов, которые различимы при всех типах дальтонизма
                </p>
                <div className="flex gap-2 mt-4">
                  <div className="w-12 h-12 bg-primary border-2 border-black"></div>
                  <div className="w-12 h-12 bg-secondary border-2 border-black"></div>
                  <div className="w-12 h-12 bg-black border-2 border-black"></div>
                  <div className="w-12 h-12 bg-white border-2 border-black"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-black">
                  <Icon name="Contrast" size={24} />
                  Высокий контраст
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black">
                  Белый фон, черный текст и четкие границы обеспечивают максимальную читаемость
                </p>
                <div className="mt-4 p-4 bg-white border-2 border-black">
                  <p className="text-black font-semibold">Пример текста с контрастом 21:1</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-black">
                  <Icon name="Square" size={24} />
                  Четкие контуры
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black">
                  Использование рамок толщиной 2-4 пикселя вместо теней и градиентов
                </p>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="h-16 bg-primary border-4 border-black"></div>
                  <div className="h-16 bg-secondary border-4 border-black"></div>
                  <div className="h-16 bg-white border-4 border-black"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-black">
                  <Icon name="Type" size={24} />
                  Читаемые шрифты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black">
                  Open Sans обеспечивает отличную читаемость при любом размере текста
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-black">Малый текст 14px</p>
                  <p className="text-base text-black">Обычный текст 16px</p>
                  <p className="text-lg font-semibold text-black">Заголовок 18px</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 border-b-2 border-black pb-2">
            Демонстрация элементов интерфейса
          </h2>
          <div className="space-y-6">
            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle className="text-black">Кнопки</CardTitle>
                <CardDescription className="text-black">
                  Все кнопки имеют четкие границы и высокий контраст
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Button className="border-2 border-black">Основная кнопка</Button>
                <Button variant="secondary" className="border-2 border-black">
                  Вторичная кнопка
                </Button>
                <Button variant="outline" className="border-2 border-black">
                  Обводка
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle className="text-black">Информационные блоки</CardTitle>
                <CardDescription className="text-black">
                  Информация структурирована с помощью рамок и отступов
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-primary/10 border-2 border-primary">
                  <p className="font-semibold text-black">Информация</p>
                  <p className="text-black">Важное сообщение с синим акцентом</p>
                </div>
                <div className="p-4 bg-secondary/10 border-2 border-secondary">
                  <p className="font-semibold text-black">Предупреждение</p>
                  <p className="text-black">Сообщение с серым акцентом</p>
                </div>
                <div className="p-4 bg-white border-2 border-black">
                  <p className="font-semibold text-black">Обычный блок</p>
                  <p className="text-black">Стандартное информационное сообщение</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle className="text-black">Визуализация данных</CardTitle>
                <CardDescription className="text-black">
                  Простые графики с контрастными элементами
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-black font-semibold">Показатель A</span>
                      <span className="text-black">75%</span>
                    </div>
                    <div className="w-full h-8 bg-muted border-2 border-black">
                      <div className="h-full bg-primary border-r-2 border-black" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-black font-semibold">Показатель B</span>
                      <span className="text-black">45%</span>
                    </div>
                    <div className="w-full h-8 bg-muted border-2 border-black">
                      <div className="h-full bg-secondary border-r-2 border-black" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-black font-semibold">Показатель C</span>
                      <span className="text-black">90%</span>
                    </div>
                    <div className="w-full h-8 bg-muted border-2 border-black">
                      <div className="h-full bg-black border-r-2 border-black" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t-4 border-black bg-white mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-black">
            © 2025 Доступный веб-дизайн. Все элементы оптимизированы для людей с нарушениями цветовосприятия.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
