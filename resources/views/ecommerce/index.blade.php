@extends('layouts.public', ['title' => 'Disalme'])

@section('content')
    <!-- With Indicators -->
    <div>
        <div class="card mt-4">
            <div class="card-body">
                <div class=" mx-auto " style="width: 60% !important">
                    <div id="carouselExampleIndicators" class="carousel slide " data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="/images/small/img-5.jpg" class="d-block w-100" alt="img-5">
                            </div>
                            <div class="carousel-item">
                                <img src="/images/small/img-6.jpg" class="d-block w-100" alt="img-6">
                            </div>
                            <div class="carousel-item">
                                <img src="/images/small/img-7.jpg" class="d-block w-100" alt="img-7">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mt-4">
            <h4 class="card-title m-3">NUEVOS PRODUCTOS</h4>
            <div class=" card-body">
                <div class="row">
                    <div class="col-lg-12">

                        <div class="row">
                            <div class="col-md-6 col-xl-3">
                                <div class="card">
                                    <img src="/images/product/p-1.png" alt="" class="img-fluid ">
                                    <div class="card-body bg-light-subtle rounded-bottom">
                                        <a class="text-dark fw-medium fs-16">Men Black Slim Fit T-shirt</a>
                                        <div class="my-1">
                                            <div class="d-flex gap-2 align-items-center">
                                                <ul class="d-flex text-warning m-0 fs-18  list-unstyled">
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star-half"></i>
                                                    </li>
                                                </ul>
                                                <p class="mb-0 fw-medium fs-15 text-dark">4.5 <span
                                                        class="text-muted fs-13">(55
                                                        Review)</span></p>
                                            </div>
                                        </div>
                                        <h4 class="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                                            <span class="text-muted text-decoration-line-through">$100</span> $80 <small
                                                class="text-muted">
                                                (30% Off)</small>
                                        </h4>
                                        <div class="mt-3">
                                            <div class="d-flex gap-2">
                                                <a href="#"
                                                    class="btn btn-soft-danger border border-danger-subtle d-inline-flex align-items-center justify-content-center"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <iconify-icon icon="solar:heart-broken" class="fs-20"></iconify-icon>
                                                </a>
                                                <a
                                                    class="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"><i
                                                        class='bx bx-cart align-middle'></i> Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-6 col-xl-3">
                                <div class="card">
                                    <img src="/images/product/p-2.png" alt="" class="img-fluid ">
                                    <div class="card-body bg-light-subtle rounded-bottom">
                                        <a class="text-dark fw-medium fs-16">Olive Green Leather Bag</a>
                                        <div class="my-1">
                                            <div class="d-flex gap-2 align-items-center">
                                                <ul class="d-flex text-warning m-0 fs-18  list-unstyled">
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star-half"></i>
                                                    </li>
                                                </ul>
                                                <p class="mb-0 fw-medium fs-15 text-dark">4.1 <span
                                                        class="text-muted fs-13">(143
                                                        Review)</span></p>
                                            </div>
                                        </div>
                                        <h4 class="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                                            <span class="text-muted text-decoration-line-through">$150</span> $136 <small
                                                class="text-muted"> (30% Off)</small>
                                        </h4>
                                        <div class="mt-3">
                                            <div class="d-flex gap-2">
                                                <div class="dropdown">
                                                    <a href="#"
                                                        class="btn btn-soft-primary border border-primary-subtle"
                                                        data-bs-toggle="dropdown" aria-expanded="false"><i
                                                            class='bx bx-dots-horizontal-rounded'></i></a>
                                                    <div class="dropdown-menu">
                                                        <!-- item-->
                                                        <a href="#!" class="dropdown-item">Edit</a>
                                                        <!-- item-->
                                                        <a href="#!" class="dropdown-item">Overview</a>
                                                        <!-- item-->
                                                        <a href="#!" class="dropdown-item">Delete</a>
                                                    </div>
                                                </div>
                                                <a
                                                    class="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"><i
                                                        class='bx bx-cart align-middle'></i> Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>

                                    <span class="position-absolute top-0 end-0 p-3">
                                        <button type="button"
                                            class="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"><iconify-icon
                                                icon="solar:heart-angle-bold-duotone"></iconify-icon></button>
                                    </span>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-3">
                                <div class="card">
                                    <img src="/images/product/p-2.png" alt="" class="img-fluid ">
                                    <div class="card-body bg-light-subtle rounded-bottom">
                                        <a class="text-dark fw-medium fs-16">Olive Green Leather Bag</a>
                                        <div class="my-1">
                                            <div class="d-flex gap-2 align-items-center">
                                                <ul class="d-flex text-warning m-0 fs-18  list-unstyled">
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star-half"></i>
                                                    </li>
                                                </ul>
                                                <p class="mb-0 fw-medium fs-15 text-dark">4.1 <span
                                                        class="text-muted fs-13">(143
                                                        Review)</span></p>
                                            </div>
                                        </div>
                                        <h4 class="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                                            <span class="text-muted text-decoration-line-through">$150</span> $136 <small
                                                class="text-muted"> (30% Off)</small>
                                        </h4>
                                        <div class="mt-3">
                                            <div class="d-flex gap-2">
                                                <div class="dropdown">
                                                    <a href="#"
                                                        class="btn btn-soft-primary border border-primary-subtle"
                                                        data-bs-toggle="dropdown" aria-expanded="false"><i
                                                            class='bx bx-dots-horizontal-rounded'></i></a>
                                                    <div class="dropdown-menu">
                                                        <!-- item-->
                                                        <a href="#!" class="dropdown-item">Edit</a>
                                                        <!-- item-->
                                                        <a href="#!" class="dropdown-item">Overview</a>
                                                        <!-- item-->
                                                        <a href="#!" class="dropdown-item">Delete</a>
                                                    </div>
                                                </div>
                                                <a
                                                    class="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"><i
                                                        class='bx bx-cart align-middle'></i> Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>

                                    <span class="position-absolute top-0 end-0 p-3">
                                        <button type="button"
                                            class="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"><iconify-icon
                                                icon="solar:heart-angle-bold-duotone"></iconify-icon></button>
                                    </span>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-3">
                                <div class="card">
                                    <img src="/images/product/p-2.png" alt="" class="img-fluid ">
                                    <div class="card-body bg-light-subtle rounded-bottom">
                                        <a class="text-dark fw-medium fs-16">Olive Green Leather Bag</a>
                                        <div class="my-1">
                                            <div class="d-flex gap-2 align-items-center">
                                                <ul class="d-flex text-warning m-0 fs-18  list-unstyled">
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star-half"></i>
                                                    </li>
                                                </ul>
                                                <p class="mb-0 fw-medium fs-15 text-dark">4.1 <span
                                                        class="text-muted fs-13">(143
                                                        Review)</span></p>
                                            </div>
                                        </div>
                                        <h4 class="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                                            <span class="text-muted text-decoration-line-through">$150</span> $136 <small
                                                class="text-muted"> (30% Off)</small>
                                        </h4>
                                        <div class="mt-3">
                                            <div class="d-flex gap-2">
                                                <div class="dropdown">
                                                    <a href="#"
                                                        class="btn btn-soft-primary border border-primary-subtle"
                                                        data-bs-toggle="dropdown" aria-expanded="false"><i
                                                            class='bx bx-dots-horizontal-rounded'></i></a>
                                                    <div class="dropdown-menu">
                                                        <!-- item-->
                                                        <a href="#!" class="dropdown-item">Edit</a>
                                                        <!-- item-->
                                                        <a href="#!" class="dropdown-item">Overview</a>
                                                        <!-- item-->
                                                        <a href="#!" class="dropdown-item">Delete</a>
                                                    </div>
                                                </div>
                                                <a
                                                    class="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"><i
                                                        class='bx bx-cart align-middle'></i> Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>

                                    <span class="position-absolute top-0 end-0 p-3">
                                        <button type="button"
                                            class="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"><iconify-icon
                                                icon="solar:heart-angle-bold-duotone"></iconify-icon></button>
                                    </span>
                                </div>
                            </div>

                        </div>

                        <div class="py-3 border-top">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-end mb-0">
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">Previous</a>
                                    </li>
                                    <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="card mt-4">
            <h4 class="card-title m-3">NUEVOS PRODUCTOS</h4>
            <div class=" card-body">
                <div class="row">
                    <div class="col-lg-12">

                        <div class="row">
                            <div class="col-md-6 col-xl-3">
                                <div class="card">
                                    <img src="/images/product/p-1.png" alt="" class="img-fluid ">
                                    <div class="card-body bg-light-subtle rounded-bottom">
                                        <a class="text-dark fw-medium fs-16">Men Black Slim Fit T-shirt</a>
                                        <div class="my-1">
                                            <div class="d-flex gap-2 align-items-center">
                                                <ul class="d-flex text-warning m-0 fs-18  list-unstyled">
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star-half"></i>
                                                    </li>
                                                </ul>
                                                <p class="mb-0 fw-medium fs-15 text-dark">4.5 <span
                                                        class="text-muted fs-13">(55
                                                        Review)</span></p>
                                            </div>
                                        </div>
                                        <h4 class="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                                            <span class="text-muted text-decoration-line-through">$100</span> $80 <small
                                                class="text-muted">
                                                (30% Off)</small>
                                        </h4>
                                        <div class="mt-3">
                                            <div class="d-flex gap-2">
                                                <a href="#"
                                                    class="btn btn-soft-danger border border-danger-subtle d-inline-flex align-items-center justify-content-center"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <iconify-icon icon="solar:heart-broken" class="fs-20"></iconify-icon>
                                                </a>
                                                <a
                                                    class="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"><i
                                                        class='bx bx-cart align-middle'></i> Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-6 col-xl-3">
                                <div class="card">
                                    <img src="/images/product/p-2.png" alt="" class="img-fluid ">
                                    <div class="card-body bg-light-subtle rounded-bottom">
                                        <a class="text-dark fw-medium fs-16">Olive Green Leather Bag</a>
                                        <div class="my-1">
                                            <div class="d-flex gap-2 align-items-center">
                                                <ul class="d-flex text-warning m-0 fs-18  list-unstyled">
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star-half"></i>
                                                    </li>
                                                </ul>
                                                <p class="mb-0 fw-medium fs-15 text-dark">4.1 <span
                                                        class="text-muted fs-13">(143
                                                        Review)</span></p>
                                            </div>
                                        </div>
                                        <h4 class="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                                            <span class="text-muted text-decoration-line-through">$150</span> $136 <small
                                                class="text-muted"> (30% Off)</small>
                                        </h4>
                                        <div class="mt-3">
                                            <div class="d-flex gap-2">
                                                <div class="dropdown">
                                                    <a href="#"
                                                        class="btn btn-soft-primary border border-primary-subtle"
                                                        data-bs-toggle="dropdown" aria-expanded="false"><i
                                                            class='bx bx-dots-horizontal-rounded'></i></a>
                                                    <div class="dropdown-menu">
                                                        <!-- item-->
                                                        <a href="#!" class="dropdown-item">Edit</a>
                                                        <!-- item-->
                                                        <a href="#!" class="dropdown-item">Overview</a>
                                                        <!-- item-->
                                                        <a href="#!" class="dropdown-item">Delete</a>
                                                    </div>
                                                </div>
                                                <a
                                                    class="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"><i
                                                        class='bx bx-cart align-middle'></i> Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>

                                    <span class="position-absolute top-0 end-0 p-3">
                                        <button type="button"
                                            class="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"><iconify-icon
                                                icon="solar:heart-angle-bold-duotone"></iconify-icon></button>
                                    </span>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-3">
                                <div class="card">
                                    <img src="/images/product/p-2.png" alt="" class="img-fluid ">
                                    <div class="card-body bg-light-subtle rounded-bottom">
                                        <a class="text-dark fw-medium fs-16">Olive Green Leather Bag</a>
                                        <div class="my-1">
                                            <div class="d-flex gap-2 align-items-center">
                                                <ul class="d-flex text-warning m-0 fs-18  list-unstyled">
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star-half"></i>
                                                    </li>
                                                </ul>
                                                <p class="mb-0 fw-medium fs-15 text-dark">4.1 <span
                                                        class="text-muted fs-13">(143
                                                        Review)</span></p>
                                            </div>
                                        </div>
                                        <h4 class="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                                            <span class="text-muted text-decoration-line-through">$150</span> $136 <small
                                                class="text-muted"> (30% Off)</small>
                                        </h4>
                                        <div class="mt-3">
                                            <div class="d-flex gap-2">
                                                <div class="dropdown">
                                                    <a href="#"
                                                        class="btn btn-soft-primary border border-primary-subtle"
                                                        data-bs-toggle="dropdown" aria-expanded="false"><i
                                                            class='bx bx-dots-horizontal-rounded'></i></a>
                                                    <div class="dropdown-menu">
                                                        <!-- item-->
                                                        <a href="#!" class="dropdown-item">Edit</a>
                                                        <!-- item-->
                                                        <a href="#!" class="dropdown-item">Overview</a>
                                                        <!-- item-->
                                                        <a href="#!" class="dropdown-item">Delete</a>
                                                    </div>
                                                </div>
                                                <a
                                                    class="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"><i
                                                        class='bx bx-cart align-middle'></i> Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>

                                    <span class="position-absolute top-0 end-0 p-3">
                                        <button type="button"
                                            class="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"><iconify-icon
                                                icon="solar:heart-angle-bold-duotone"></iconify-icon></button>
                                    </span>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-3">
                                <div class="card">
                                    <img src="/images/product/p-2.png" alt="" class="img-fluid ">
                                    <div class="card-body bg-light-subtle rounded-bottom">
                                        <a class="text-dark fw-medium fs-16">Olive Green Leather Bag</a>
                                        <div class="my-1">
                                            <div class="d-flex gap-2 align-items-center">
                                                <ul class="d-flex text-warning m-0 fs-18  list-unstyled">
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star"></i>
                                                    </li>
                                                    <li>
                                                        <i class="bx bxs-star-half"></i>
                                                    </li>
                                                </ul>
                                                <p class="mb-0 fw-medium fs-15 text-dark">4.1 <span
                                                        class="text-muted fs-13">(143
                                                        Review)</span></p>
                                            </div>
                                        </div>
                                        <h4 class="fw-semibold text-dark mt-2 d-flex align-items-center gap-2">
                                            <span class="text-muted text-decoration-line-through">$150</span> $136 <small
                                                class="text-muted"> (30% Off)</small>
                                        </h4>
                                        <div class="mt-3">
                                            <div class="d-flex gap-2">
                                                <div class="dropdown">
                                                    <a href="#"
                                                        class="btn btn-soft-primary border border-primary-subtle"
                                                        data-bs-toggle="dropdown" aria-expanded="false"><i
                                                            class='bx bx-dots-horizontal-rounded'></i></a>
                                                    <div class="dropdown-menu">
                                                        <!-- item-->
                                                        <a href="#!" class="dropdown-item">Edit</a>
                                                        <!-- item-->
                                                        <a href="#!" class="dropdown-item">Overview</a>
                                                        <!-- item-->
                                                        <a href="#!" class="dropdown-item">Delete</a>
                                                    </div>
                                                </div>
                                                <a
                                                    class="btn btn-outline-dark border border-secondary-subtle d-flex align-items-center justify-content-center gap-1 w-100"><i
                                                        class='bx bx-cart align-middle'></i> Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>

                                    <span class="position-absolute top-0 end-0 p-3">
                                        <button type="button"
                                            class="btn btn-soft-danger avatar-sm d-inline-flex align-items-center justify-content-center fs-20 rounded-circle"><iconify-icon
                                                icon="solar:heart-angle-bold-duotone"></iconify-icon></button>
                                    </span>
                                </div>
                            </div>

                        </div>

                        <div class="py-3 border-top">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-end mb-0">
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">Previous</a>
                                    </li>
                                    <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="card mt-4">
            <div class="row">
                <h1>Use Bootstrap 3's carousel to show multiple items per slide.</h1>
                <div class="row">
                    <div class="col-md-12">
                        <div class="carousel slide multi-item-carousel" id="theCarousel">
                            <div class="carousel-inner">
                                <div class="item active">
                                    <div class="col-xs-4"><a href="#1"><img
                                                src="https://source.unsplash.com/300x300/?perth,australia"
                                                class="img-responsive"></a></div>
                                </div>
                                <div class="item">
                                    <div class="col-xs-4"><a href="#1"><img
                                                src="https://source.unsplash.com/300x300/?fremantle,australia"
                                                class="img-responsive"></a></div>
                                </div>
                                <div class="item">
                                    <div class="col-xs-4"><a href="#1"><img
                                                src="https://source.unsplash.com/300x300/?west-australia"
                                                class="img-responsive"></a></div>
                                </div>
                                <div class="item">
                                    <div class="col-xs-4"><a href="#1"><img
                                                src="https://source.unsplash.com/300x300/?perth"
                                                class="img-responsive"></a></div>
                                </div>
                                <div class="item">
                                    <div class="col-xs-4"><a href="#1"><img
                                                src="https://source.unsplash.com/300x300/?quokka,perth"
                                                class="img-responsive"></a></div>
                                </div>
                                <div class="item">
                                    <div class="col-xs-4"><a href="#1"><img
                                                src="https://source.unsplash.com/300x300/?margaretriver,australia"
                                                class="img-responsive"></a></div>
                                </div>
                                <!-- add  more items here -->
                                <!-- Example item start:  -->

                                <div class="item">
                                    <div class="col-xs-4"><a href="#1"><img
                                                src="https://source.unsplash.com/300x300/?perth,australia&r=7"
                                                class="img-responsive"></a></div>
                                </div>

                                <!--  Example item end -->
                            </div>
                            <a class="left carousel-control" href="#theCarousel" data-slide="prev"><i
                                    class="glyphicon glyphicon-chevron-left"></i></a>
                            <a class="right carousel-control" href="#theCarousel" data-slide="next"><i
                                    class="glyphicon glyphicon-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endsection

    @section('script')
    @endsection
