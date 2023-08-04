"use client";
import styles from "./legal_info.module.scss";
import "./overwrite_body.scss";
import Link from "next/link";
import { useEffect } from "react";
const Page = () => {
  useEffect(() => {
    document.body.classList.add("overwritten_body");

    return () => {
      document.body.classList.remove("overwritten_body");
    };
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.info}>
        <Link href={"/"}>Назад</Link>
        <div>
          <h1>Юридическая информация</h1>
          <h3>
            ФИО: Махмаев Д. Д.<br />
            Электронная почта: mail@djipiti.chat<br />
            ИНН: 052402217961
          </h3>
        </div>
        <div>
          <h1>Описание услуг:</h1>
          <p>
            С нашей стороны, после оплаты подписки, вам будет предоставлена
            возможность неограниченного использования сервиса
            &quot;Джипити&quot; ровно на 30 дней с момента оплаты.
          </p>
          <h3>Стоимость подписки составляет 500 рублей (триста рублей).</h3>
        </div>
      </div>
      <div className={styles.oferta}>
        <h1>Оферта</h1>
        <p>
          <span>1. Общие положения</span> <br /> 1.1. Настоящий Договор является
          официальным предложением (публичной офертой) создателя проекта
          &quot;Джипити&quot; (в дальнейшем «Продавец») для клиента (далее –
          «Покупатель»), который примет настоящее предложение, на указанных ниже
          условиях.
          <br /> 1.2. В соответствии с пунктом 2 статьи 437 Гражданского Кодекса
          Российской Федерации (ГК РФ), в случае принятия изложенных ниже
          условий и оплаты услуг юридическое или физическое лицо, производящее
          акцепт этой оферты, становится Покупателем (в соответствии с пунктом 3
          статьи 438 ГК РФ акцепт оферты равносилен заключению Договора на
          условиях, изложенных в оферте). <br /> 1.3. Моментом полного и
          безоговорочного принятия Покупателем предложения Продавца заключить
          Договор оферты (акцептом оферты) считается факт подтверждения
          готовности совершить оплату услуги Продавца, посредством нажатия
          кнопки «Оплатить» на сайте https://djipiti.chat/. Текст настоящего
          Договора-оферты (далее по тексту – «Договор») расположен по адресу:
          https://djipiti.chat/oferta.
          <br /> 1.4. Осуществляя акцепт Договора в порядке, определенном п. 1.3
          Договора, Покупатель подтверждает, что он ознакомлен, согласен,
          полностью и безоговорочно принимает все условия Договора в том виде, в
          каком они изложены в тексте Договора, в том числе в приложениях к
          Договору, являющихся его неотъемлемой частью.
          <br /> 1.5. Клиент согласен, что акцепт Договора в порядке, указанном
          в п. 1.2 Договора является заключением Договора на условиях,
          изложенных в нем.
          <br /> 1.6. Договор не может быть отозван.
          <br /> 1.7. Договор не требует скрепления печатями и/или подписания
          Покупателем и Продавцом (далее по тексту - Стороны) и сохраняет при
          этом юридическую силу.
          <br />
          <span>2. Предмет договора</span>
          <br /> 2.1. Предметом настоящего Договора является возмездное оказание
          Продавцом услуг, описанных по адресу https://djipiti.chat/oferta, в
          соответствии с условиями настоящего Договора. <br />
          2.2. Покупатель полностью принимает условия Договора и оплачивает
          услуги Продавца в соответствии с условиями настоящего Договора. <br />{" "}
          <span>3. Оплата Услуг</span> <br /> 3.1. Стоимость услуг по Договору
          определяется в соответствии с действующими ценами и прописана на сайте
          https://djipiti.chat/oferta <br /> 3.2. Стоимость услуги может быть изменена
          Продавцом в одностороннем порядке. <br /> 3.3. Способы оплаты услуги
          указаны при оформлении платежа. <br />{" "}
          <span>4. Интеллектуальная собственность </span>
          <br /> 4.1. Вся текстовая информация и графические изображения,
          находящиеся на сайте https://djipiti.chat являются собственностью
          Продавца. <br />
          <span> 5. Особые условия и ответственность сторон. </span>
          <br />
          5.1. Продавец несет ответственность за своевременность предоставляемых
          услуг при выполнении Покупателем установленных требований и правил,
          размещенных на сайте https://djipiti.chat. <br /> 5.2. Продавец
          освобождается от ответственности за нарушение условий Договора, если
          такое нарушение вызвано действием обстоятельств непреодолимой силы
          (форс-мажор), включая: действия органов государственной власти, пожар,
          наводнение, землетрясение, другие стихийные действия, отсутствие
          электроэнергии, забастовки, гражданские волнения, беспорядки,
          технические проблемы, любые иные обстоятельства, не ограничиваясь
          перечисленным, которые могут повлиять на выполнение Продавцом
          Договора. <br /> 5.3. Продавец не несет ответственности за качество
          каналов связи общего пользования или служб, предоставляющих доступ
          Покупателя к его услугам. <br />
          <span>
            6. Конфиденциальность и защита персональной информации
          </span>{" "}
          <br />
          6.1. Продавец обязуется не разглашать полученную от Покупателя
          информацию. <br />
          6.2. Не считается нарушением обязательств разглашение информации в
          соответствии с обоснованными и применимыми требованиями закона. <br />
          6.3. Продавец получает информацию об IP-адресе посетителя Сайта
          https://djipiti.chat/. Данная информация не используется для
          установления личности посетителя. <br /> 6.4. Продавец не несет
          ответственности за сведения, предоставленные Покупателем на сайте
          https://djipiti.chat/ в общедоступной форме. <br />{" "}
          <span>7. Порядок рассмотрения претензий и споров</span> <br /> 7.1.
          Претензии Покупателя по предоставляемым услугам принимаются Продавцом
          к рассмотрению по адресу https://t.me/DjipitiSupportBot в течение 2
          (рабочих) дней с момента возникновения спорной ситуации. <br /> 7.2.
          При рассмотрении спорных ситуаций Продавец вправе запросить у
          Покупателя всю интересующую документацию относительно рассматриваемого
          мероприятия. В случае непредоставления Покупателем документов в
          течение 1 рабочего дня после дня требования, претензия рассмотрению
          Продавцом не подлежит. <br />
          7.3. Продавец и Покупатель, принимая во внимания характер оказываемой
          услуги, обязуются в случае возникновения споров и разногласий,
          связанных с оказанием услуг, применять досудебный порядок
          урегулирования спора. В случае невозможности урегулирования спора в
          досудебном порядке стороны вправе обратиться в суд. <br />
          <span> 8. Прочие условия</span> <br /> 8.1. Покупатель обладает всеми
          правами и полномочиями, необходимыми для заключения и исполнения
          Договора. <br /> 8.2. Покупатель вправе в любое время в одностороннем
          порядке отказаться от услуг Продавца. В случае одностороннего отказа{" "}
          <br />
          Покупателя от услуг Продавца произведенная оплата не возвращается.
          8.3. Продавец оставляет за собой право изменять или дополнять любые из
          условий настоящего Договора в любое время, опубликовывая все изменения
          на своем сайте. <br /> 8.4. По всем вопросам, не урегулированным
          настоящим Договором, стороны руководствуются действующим
          законодательством Российской Федерации. <br />
          8.5. Признание судом недействительности какого-либо положения
          настоящего Договора и правил не влечет за собой недействительность
          остальных положений.
        </p>
      </div>
    </main>
  );
};

export default Page;
