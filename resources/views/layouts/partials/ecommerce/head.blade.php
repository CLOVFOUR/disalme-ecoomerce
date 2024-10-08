 <!--style="background: #0402a5" -->
 <header class="topbar ">
     <div class="container-fluid">
         <div class="navbar-header">
             <div class="d-flex align-items-center">
                 <!-- Menu Toggle Button
                     <div class="topbar-item">
                    <button type="button" class="button-toggle-menu me-2">
                        <iconify-icon icon="solar:hamburger-menu-broken" class="fs-24 align-middle"></iconify-icon>
                    </button>
                </div>
                -->
                 <div class="logo-box">
                     <a href="{{ url('/') }}" class="logo-dark">

                         <img src="/images/logo-nombre.png" class="logo-lg" alt="logo dark">
                     </a>

                     <a href="{{ url('/') }}" class="logo-light light">

                         <img src="/images/logo-nombre.png" class="logo-lg" alt="logo light">
                     </a>

                 </div>

                 <!-- Menu Toggle Button -->
                 <div class="topbar-item ">

                 </div>

                 <!-- App Search-->
                 <form class="app-search d-none d-md-block  " style="padding-left: 53px;">
                     <div class="position-relative">
                         <input type="search" class="form-control " placeholder="Buscar..." autocomplete="off"
                             value="">
                         <iconify-icon icon="solar:magnifer-linear" class="search-widget-icon"></iconify-icon>
                     </div>
                 </form>
             </div>

             <div class="d-flex align-items-center gap-1">


                 <!-- Theme Color (Light/Dark) -->
                 <div class="topbar-item">
                     <button type="button" class="topbar-button" id="light-dark-mode">
                         <iconify-icon icon="solar:moon-bold-duotone" class="fs-24 align-middle"></iconify-icon>
                     </button>
                 </div>
                 <div class="topbar-item">


                     <div class="dropdown">
                         <button class="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown"
                             aria-haspopup="true" aria-expanded="false">
                             <i class="bx bx-grid fs-2"></i>
                             Categorias
                         </button>
                         <form class="dropdown-menu dropdown-lg p-3">
                             <div class="mb-3">
                                 <label class="form-label" for="exampleDropdownFormEmail">Email address</label>
                                 <input type="email" class="form-control" id="exampleDropdownFormEmail"
                                     placeholder="email@example.com">
                             </div>
                             <div class="mb-3">
                                 <label class="form-label" for="exampleDropdownFormPassword">Password</label>
                                 <input type="password" class="form-control" id="exampleDropdownFormPassword"
                                     placeholder="Password">
                             </div>
                             <div class="mb-3">
                                 <div class="form-check">
                                     <input type="checkbox" class="form-check-input" id="dropdownCheck">
                                     <label class="form-check-label" for="dropdownCheck">Remember me</label>
                                 </div>
                             </div>
                             <button type="submit" class="btn btn-primary">Sign in</button>
                         </form>
                     </div>
                 </div>
                 <div class="topbar-item">
                     <button class="btn btn-link " type="button" data-bs-toggle="dropdown" aria-haspopup="true"
                         aria-expanded="false">
                         <i class="bx bx-store fs-2"></i>
                         Contacto
                     </button>
                 </div>


                 @auth
                     <!-- User -->
                     <div class="dropdown topbar-item">
                         <a type="button" class="topbar-button" id="page-header-user-dropdown" data-bs-toggle="dropdown"
                             aria-haspopup="true" aria-expanded="false">
                             <span class="d-flex align-items-center">
                                 <img class="rounded-circle" width="32" src="/images/users/avatar-1.jpg" alt="avatar-3">
                             </span>
                         </a>
                         <div class="dropdown-menu dropdown-menu-end">
                             <!-- item-->
                             <h6 class="dropdown-header">Welcome Gaston!</h6>
                             <a class="dropdown-item">
                                 <i class="bx bx-user-circle text-muted fs-18 align-middle me-1"></i><span
                                     class="align-middle">Profile</span>
                             </a>
                             <a class="dropdown-item">
                                 <i class="bx bx-message-dots text-muted fs-18 align-middle me-1"></i><span
                                     class="align-middle">Messages</span>
                             </a>

                             <a class="dropdown-item">
                                 <i class="bx bx-wallet text-muted fs-18 align-middle me-1"></i><span
                                     class="align-middle">Pricing</span>
                             </a>
                             <a class="dropdown-item">
                                 <i class="bx bx-help-circle text-muted fs-18 align-middle me-1"></i><span
                                     class="align-middle">Help</span>
                             </a>
                             <a class="dropdown-item">
                                 <i class="bx bx-lock text-muted fs-18 align-middle me-1"></i><span
                                     class="align-middle">Lock screen</span>
                             </a>

                             <div class="dropdown-divider my-1"></div>
                             <a class="dropdown-item text-danger" href="#"
                                 onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                 <i class="bx bx-log-out fs-18 align-middle me-1"></i>
                                 <span class="align-middle">Logout</span>
                             </a>

                             <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                 style="display: none;">
                                 @csrf
                             </form>



                         </div>
                     </div>
                 @else
                     <a type="button" class="topbar-button" href="{{ route('login') }}">
                         <span class="d-flex align-items-center">
                             <img class="rounded-circle" width="32" src="/images/users/dummy-avatar.jpg"
                                 alt="avatar-3">
                         </span>
                     </a>
                 @endauth
                 <!-- Theme Setting -->
                 <div class="topbar-item d-none d-md-flex">
                     <button type="button" class="topbar-button" id="theme-settings-btn" data-bs-toggle="offcanvas"
                         data-bs-target="#theme-settings-offcanvas" aria-controls="theme-settings-offcanvas">
                         <iconify-icon icon="solar:cart-large-2-bold-duotone"
                             class="fs-26 align-middle"></iconify-icon>
                     </button>
                 </div>
             </div>
         </div>
     </div>
 </header>
