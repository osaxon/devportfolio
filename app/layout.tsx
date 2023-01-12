import { ServerThemeProvider } from '@wits/next-themes'

import '@/styles/prism-dracula.css';
import '@/styles/globals.css';

import { Header } from '@/components/Organisms'

import AppWrapper from './AppWrapper'

export default function RootLayout({ children }) {
    return (
        <ServerThemeProvider>
        <html lang='en'>
            <head>
            </head>
            <body>
            <AppWrapper>
                <Header />
                    {children}
                </AppWrapper>
            </body>
        </html>
        </ServerThemeProvider>
    )
}