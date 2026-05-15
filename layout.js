export const metadata = {
  title: 'Опора бухгалтеру',
  description: 'Наставничество и помощь в бухгалтерском учёте',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
