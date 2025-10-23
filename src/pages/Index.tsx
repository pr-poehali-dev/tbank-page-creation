import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const benefits = [
    {
      icon: "Zap",
      title: "Быстрое открытие",
      description: "Открытие счёта онлайн за 10 минут без визита в офис"
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Защита средств и данных по стандартам ЦБ РФ"
    },
    {
      icon: "Smartphone",
      title: "Мобильный банк",
      description: "Управление бизнесом из приложения в любое время"
    },
    {
      icon: "DollarSign",
      title: "Без комиссий",
      description: "0₽ за открытие и ведение расчётного счёта"
    },
    {
      icon: "TrendingUp",
      title: "Начисление процентов",
      description: "До 10% годовых на остаток по счёту"
    },
    {
      icon: "HeadphonesIcon",
      title: "Поддержка 24/7",
      description: "Круглосуточная техподдержка по всем вопросам"
    }
  ];

  const tariffs = [
    {
      name: "Базовый",
      price: "0₽",
      period: "/мес",
      description: "Для начинающих предпринимателей",
      features: [
        "0₽ открытие и обслуживание",
        "До 10 платежей бесплатно",
        "Интернет-банк и приложение",
        "Выпуск карты 0₽",
        "Кэшбэк до 5%"
      ],
      popular: false
    },
    {
      name: "Бизнес",
      price: "490₽",
      period: "/мес",
      description: "Для активно растущего бизнеса",
      features: [
        "Всё из тарифа Базовый",
        "100 платежей бесплатно",
        "8% годовых на остаток",
        "Бесплатные уведомления",
        "Личный менеджер",
        "Кэшбэк до 10%"
      ],
      popular: true
    },
    {
      name: "Премиум",
      price: "1490₽",
      period: "/мес",
      description: "Для крупного бизнеса",
      features: [
        "Всё из тарифа Бизнес",
        "Безлимитные платежи",
        "10% годовых на остаток",
        "Приоритетная поддержка",
        "Бухгалтерия и сервисы",
        "Кэшбэк до 15%"
      ],
      popular: false
    }
  ];

  const reviews = [
    {
      name: "Алексей Иванов",
      company: "ИП Иванов",
      rating: 5,
      text: "Открыл счёт за 15 минут прямо с телефона. Никаких походов в банк, всё очень удобно. Рекомендую!"
    },
    {
      name: "Мария Петрова",
      company: "ООО \"Петрова и Ко\"",
      rating: 5,
      text: "Отличное приложение, всегда вижу актуальный баланс. Поддержка реально работает 24/7 — проверено!"
    },
    {
      name: "Дмитрий Смирнов",
      company: "ООО \"ТехноСтарт\"",
      rating: 5,
      text: "Перешли с другого банка на Т-Банк. Проценты на остаток — приятный бонус. За 3 месяца ни одной проблемы."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-secondary text-black hover:bg-secondary/90 text-sm font-semibold px-4 py-1.5">
                Открытие за 10 минут
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Расчётный счёт для бизнеса в Т-Банке
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Откройте счёт онлайн без визита в офис. 0₽ за обслуживание, до 10% на остаток и круглосуточная поддержка.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-black font-semibold text-lg px-8 py-6">
                  Открыть счёт
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black font-semibold text-lg px-8 py-6">
                  Узнать больше
                </Button>
              </div>
            </div>
            
            <div className="animate-scale-in hidden lg:block">
              <img 
                src="https://cdn.poehali.dev/projects/4bdc0a63-f661-46e0-822f-e449afad5164/files/222f4c1f-7c7b-4cce-bb68-21c73beaa197.jpg" 
                alt="Бизнес с Т-Банком" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
              Преимущества для вашего бизнеса
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Всё необходимое для эффективного управления финансами вашей компании
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-secondary bg-white"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={benefit.icon as any} size={28} className="text-black" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tariffs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
              Тарифы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите подходящий тариф для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tariffs.map((tariff, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-2xl transition-all duration-300 ${
                  tariff.popular 
                    ? 'border-2 border-secondary scale-105 shadow-xl' 
                    : 'hover:-translate-y-2'
                }`}
              >
                {tariff.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-secondary text-black font-bold px-4 py-1.5">
                      Популярный
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold mb-2">{tariff.name}</CardTitle>
                  <CardDescription className="text-base mb-4">{tariff.description}</CardDescription>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-black">{tariff.price}</span>
                    <span className="text-gray-600 ml-2">{tariff.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {tariff.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  
                  <Button 
                    className={`w-full mt-6 ${
                      tariff.popular 
                        ? 'bg-secondary hover:bg-secondary/90 text-black' 
                        : 'bg-black hover:bg-gray-800 text-white'
                    } font-semibold py-6`}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Более 50 000 предпринимателей уже работают с Т-Банком
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                  <CardTitle className="text-xl font-bold">{review.name}</CardTitle>
                  <CardDescription>{review.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Откройте расчётный счёт прямо сейчас и получите доступ ко всем возможностям Т-Банка
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-black font-semibold text-lg px-10 py-6">
            Открыть счёт бесплатно
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            © 2025 Т-Банк. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
