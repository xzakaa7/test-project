

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>@yield('title')</title>

        <style>
            html, body {
                background: linear-gradient(135deg, #b3e0ff 0%, #e6f7ff 100%);
                color: #22223b;
                font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;
                font-weight: 400;
                height: 100vh;
                margin: 0;
                overflow: hidden;
            }
            .full-height {
                height: 100vh;
            }
            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }
            .position-ref {
                position: relative;
            }
            .content {
                text-align: center;
                background: rgba(255,255,255,0.85);
                border-radius: 24px;
                box-shadow: 0 8px 32px rgba(0,0,0,0.12);
                padding: 40px 32px 32px 32px;
                min-width: 340px;
            }
            .face-anim {
                width: 220px;
                animation: shake 1.5s infinite;
                margin-bottom: 18px;
                filter: drop-shadow(0 4px 16px rgba(0,0,0,0.10));
            }
            @keyframes shake {
                0% { transform: translate(0, 0) rotate(0deg);}
                20% { transform: translate(-10px, 0) rotate(-8deg);}
                40% { transform: translate(10px, 0) rotate(8deg);}
                60% { transform: translate(-10px, 0) rotate(-8deg);}
                80% { transform: translate(10px, 0) rotate(8deg);}
                100% { transform: translate(0, 0) rotate(0deg);}
            }
            .error-text {
                margin-top: 10px;
                font-size: 24px;
                font-weight: 500;
                color: #22223b;
            }
        </style>
        @stack('styles')
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            <div class="content">
                @if(View::hasSection('image'))
                    <img src="@yield('image')" alt="Error Image" class="face-anim">
                @endif
                <div class="error-text">
                    @yield('message')
                </div>
            </div>
        </div>
    </body>
</html>
