<div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100" id="sidebar" style="position: fixed; width: 280px; height:auto;">

    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <div id="carouselHomes" class="carousel slide" data-ride="carousel" data-interval="false">
          <div class="carousel-inner">
            @foreach (Auth::user()->homes as $home)
              <div class="carousel-item {{ Auth::user()->getSelectedHome() == $home ? 'active' : ''}}">
                <a href="#" class="nav-link text-white">
                  <div class="row">
                    <div class="col-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                      </svg>
                    </div>
                    <div class="col-8">
                      {{ Auth::user()->getSelectedHome()->city}}
                    </div>
                  </div>
                </a>
              </div>
            @endforeach
          </div>
          <a class="carousel-control-prev" href="#carouselHomes" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a class="carousel-control-next" href="#carouselHomes" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
        </div>
      </li>
      <hr>
    </ul>
  </div>