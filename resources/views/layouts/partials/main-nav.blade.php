<div class="main-nav">
    <!-- Sidebar Logo -->
    <div class="logo-box">
        <a href="{{ route('dashboards.index') }}" class="logo-dark">
            <img src="/images/icon-light.png" class="logo-sm" alt="logo sm">
            <img src="/images/logo-nombre.png" class="logo-lg" alt="logo dark">
        </a>

        <a href="{{ route('dashboards.index') }}" class="logo-light light">
            <img src="/images/icon-dark.png" class="logo-sm" alt="logo sm">
            <img src="/images/logo-nombre.png" class="logo-lg" alt="logo light">
        </a>

    </div>

    <!-- Menu Toggle Button (sm-hover) -->
    <button type="button" class="button-sm-hover" aria-label="Show Full Sidebar">
        <iconify-icon icon="solar:double-alt-arrow-right-bold-duotone" class="button-sm-hover-icon"></iconify-icon>
    </button>

    <div class="scrollbar" data-simplebar>
        <ul class="navbar-nav" id="navbar-nav">

            <li class="menu-title">General</li>

            <li class="nav-item">
                <a class="nav-link" href="{{ route('dashboards.index') }}">
                    <span class="nav-icon">
                        <iconify-icon icon="solar:widget-5-bold-duotone"></iconify-icon>
                    </span>
                    <span class="nav-text"> Dashboard </span>
                </a>
            </li>


        </ul>
    </div>
</div>
