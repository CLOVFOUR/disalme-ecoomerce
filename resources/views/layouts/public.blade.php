<!DOCTYPE html>
<html lang="en">

<head>
    @include('layouts.partials/title-meta', ['title' => $title])
    @yield('css')
    @livewireStyles
    @include('layouts.partials/head-css')
</head>

<body>

    <div class="">

        @include('layouts.partials/ecommerce/head', ['title' => $title])


        <div class="page-content">

            <div class="container-fluid">
                @yield('content')
            </div>

            @include('layouts.partials/footer')

        </div>

    </div>

    @include('layouts.partials/right-sidebar')
    @include('layouts.partials/footer-scripts')
    @vite(['resources/js/app.js', 'resources/js/ecommerce/layout.js'])

</body>

</html>
