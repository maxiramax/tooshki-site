
export default function TooshkiSite() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <header className="text-center py-10">
        <img src="/tooshki_logo.png" alt="Tooshki.kz logo" className="mx-auto h-24 mb-4" />
        <h1 className="text-4xl font-bold">Tooshki.kz</h1>
        <p className="text-lg mt-2">Платформа для покупки и продажи готовых ТОО в Казахстане</p>
      </header>

      <main className="max-w-4xl mx-auto">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Каталог ТОО на продажу</h2>
          <ul className="space-y-4">
            <li className="p-4 rounded-xl shadow border">
              <h3 className="text-xl font-bold">ТОО "Дорожник KZ"</h3>
              <p>Год регистрации: 2000</p>
              <p>Основной ОКЭД: 41202 (Строительство дорог)</p>
              <p>СМР-2: есть с 2005 года</p>
              <p>Опыт: дороги, ЖД, школа, благоустройство</p>
              <p>Фин. устойчивость (2025): СГД: 1.63 млрд, ПУН: 5.59%, ФОТ: 790 млн тг</p>
              <p>Цена: договорная</p>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Подать заявку на продажу ТОО</h2>
          <form
            action="https://formspree.io/f/xqkrerdd"
            method="POST"
            className="space-y-4"
          >
            <input type="text" name="company" placeholder="Название ТОО" className="w-full p-2 border rounded-xl" required />
            <input type="text" name="year" placeholder="Год регистрации" className="w-full p-2 border rounded-xl" required />
            <textarea name="details" placeholder="Описание, опыт, финансы" className="w-full p-2 border rounded-xl" rows="4" required></textarea>
            <input type="text" name="contact" placeholder="Контактный телефон" className="w-full p-2 border rounded-xl" required />
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-xl">Отправить</button>
          </form>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Контакты</h2>
          <p>По всем вопросам: <strong>+7 777 777 77 77</strong></p>
          <p>Email: <strong>legal2008@mail.ru</strong></p>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 mt-10">
        &copy; 2025 Tooshki.kz. Все права защищены.
      </footer>
    </div>
  );
}
