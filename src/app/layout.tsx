import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

const roboto = Roboto({
   weight: ['300', '400', '500', '700'],
   subsets: ['latin'],
   display: 'swap',
   variable: '--font-roboto',
});


export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" className={roboto.variable}>
        <body>
          {/* Layout UI */}
          {/* Place children where you want to render a page or nested layout */}
          <ThemeProvider theme={theme}>
            <main>{children}</main>
          </ThemeProvider>
        </body>
      </html>
    )
 }
