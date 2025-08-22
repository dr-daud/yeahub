import user from "../assets/UserSwitch.svg";
import note from "../assets/NotePencil.svg";
import trend from "../assets/TrendUp.svg";
import board from "../assets/ClipboardText.svg";
import megaphone from "../assets/Megaphone.svg";
import chat from "../assets/Chat.svg";

export const JOIN_US_LINKS = {
  left: [
    { icon: user, text: "Тренажер собеседований" },
    { icon: trend, text: "Статистика и история обучения" },
  ],
  right: [
    { icon: note, text: "Режим запоминание вопросов" },
    { icon: board, text: "Доступ ко всем подборкам" },
  ],
};

export const UNITES_LINKS = [
  { icon: megaphone, text: "YeaHub: Главные новости и обновления платформы" },
  {
    icon: chat,
    text: "YeaHub Community: Общение, обмен опытом и поддержка единомышленников",
  },
];
