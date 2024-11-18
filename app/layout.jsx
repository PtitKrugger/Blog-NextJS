import "./styles/globals.css";
import { PostsProvider } from './context/PostsContext';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
            </head>
            <body>
                <PostsProvider>
                    {children}
                </PostsProvider>
            </body>
        </html>
    );
}
