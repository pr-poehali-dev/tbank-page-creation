import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const services = [
    {
      icon: "Scale",
      title: "Раздел имущества",
      description: "Защита ваших интересов при разделе совместно нажитого имущества. Грамотное составление исковых заявлений и представительство в суде.",
      features: ["Оценка имущества", "Досудебное урегулирование", "Судебное представительство"]
    },
    {
      icon: "Users",
      title: "Определение места жительства детей",
      description: "Помощь в решении споров о месте проживания ребенка. Защита прав и интересов детей при раздельном проживании родителей.",
      features: ["Подготовка документов", "Участие органов опеки", "Судебная защита"]
    },
    {
      icon: "ShieldAlert",
      title: "Лишение родительских прав",
      description: "Юридическое сопровождение дел о лишении родительских прав при наличии оснований, предусмотренных законом.",
      features: ["Сбор доказательств", "Работа с органами опеки", "Судебное разбирательство"]
    }
  ];

  const advantages = [
    {
      icon: "Award",
      title: "Опыт более 10 лет",
      description: "Успешно решили более 500 дел в области семейного права"
    },
    {
      icon: "CheckCircle2",
      title: "Индивидуальный подход",
      description: "Каждое дело уникально — разрабатываем стратегию под вашу ситуацию"
    },
    {
      icon: "Shield",
      title: "Конфиденциальность",
      description: "Гарантируем полную конфиденциальность и защиту личных данных"
    },
    {
      icon: "Clock",
      title: "Быстрое реагирование",
      description: "Оперативно отвечаем на обращения и начинаем работу"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Консультация",
      description: "Бесплатная первичная консультация для анализа вашей ситуации"
    },
    {
      number: "02",
      title: "Стратегия",
      description: "Разработка индивидуальной правовой стратегии решения вопроса"
    },
    {
      number: "03",
      title: "Документы",
      description: "Подготовка всех необходимых документов и обращений"
    },
    {
      number: "04",
      title: "Результат",
      description: "Представительство в суде и достижение нужного результата"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-700 to-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-white text-primary hover:bg-white/90 text-sm font-semibold px-4 py-1.5">
                Бесплатная консультация
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Юридическая помощь в семейных спорах
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Профессиональная защита ваших интересов при разделе имущества, определении места жительства детей и лишении родительских прав.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-primary font-semibold text-lg px-8 py-6">
                  Получить консультацию
                  <Icon name="Phone" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6">
                  Наши услуги
                </Button>
              </div>
            </div>
            
            <div className="animate-scale-in hidden lg:block">
              <img 
                src="https://cdn.poehali.dev/projects/4bdc0a63-f661-46e0-822f-e449afad5164/files/0d714dc2-309c-40fc-9b80-2643cd227f00.jpg" 
                alt="Юридические услуги" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Специализируемся на решении самых сложных семейных споров
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-t-4 border-t-primary"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-3">{service.title}</CardTitle>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ваша уверенность в завтрашнем дне — наша главная цель
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={advantage.icon as any} size={36} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Как мы работаем
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Прозрачный процесс от консультации до результата
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="text-6xl font-bold text-secondary mb-4">{step.number}</div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <Icon name="ArrowRight" size={24} className="text-secondary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Запишитесь на консультацию
              </h2>
              <p className="text-xl text-blue-100">
                Оставьте заявку, и мы свяжемся с вами в ближайшее время
              </p>
            </div>

            <Card className="bg-white">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Ваше имя *
                    </label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="text-lg py-6"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Телефон *
                    </label>
                    <Input 
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="text-lg py-6"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Опишите вашу ситуацию
                    </label>
                    <Textarea 
                      placeholder="Расскажите кратко о вашей проблеме..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={5}
                      className="text-lg"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full bg-primary hover:bg-blue-700 text-white font-semibold text-lg py-6"
                  >
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={20} />
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">Контакты</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (___) ___-__-__
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@lawfirm.ru
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-xl mb-4">Услуги</h3>
              <ul className="space-y-2">
                <li>Раздел имущества</li>
                <li>Определение места жительства детей</li>
                <li>Лишение родительских прав</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-xl mb-4">График работы</h3>
              <p>Пн-Пт: 9:00 - 19:00</p>
              <p>Сб: 10:00 - 16:00</p>
              <p>Вс: выходной</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2025 Юридическая фирма. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
