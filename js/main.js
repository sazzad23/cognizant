// particle.min.js hosted on GitHub
// Scroll down for initialisation code
var QuestionIndex = '';
var total_time_seconds = 40;
var waiting_time_seconds = 3;
var videoURL = "";
!function (a) {
    var b = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global;
    "function" == typeof define && define.amd ? define(["exports"], function (c) {
        b.ParticleNetwork = a(b, c)
    }) : "object" == typeof module && module.exports ? module.exports = a(b, {}) : b.ParticleNetwork = a(b, {})
}(function (a, b) {
    var c = function (a) {
        this.canvas = a.canvas, this.g = a.g, this.particleColor = a.options.particleColor, this.x = Math.random() * this.canvas.width, this.y = Math.random() * this.canvas.height, this.velocity = {
            x: (Math.random() - .5) * a.options.velocity,
            y: (Math.random() - .5) * a.options.velocity
        }
    };
    return c.prototype.update = function () {
        (this.x > this.canvas.width + 20 || this.x < -20) && (this.velocity.x = -this.velocity.x), (this.y > this.canvas.height + 20 || this.y < -20) && (this.velocity.y = -this.velocity.y), this.x += this.velocity.x, this.y += this.velocity.y
    }, c.prototype.h = function () {
        this.g.beginPath(), this.g.fillStyle = this.particleColor, this.g.globalAlpha = .7, this.g.arc(this.x, this.y, 1.5, 0, 2 * Math.PI), this.g.fill()
    }, b = function (a, b) {
        this.i = a, this.i.size = {
            width: this.i.offsetWidth,
            height: this.i.offsetHeight
        }, b = void 0 !== b ? b : {}, this.options = {
            particleColor: void 0 !== b.particleColor ? b.particleColor : "#fff",
            background: void 0 !== b.background ? b.background : "#1a252f",
            interactive: void 0 !== b.interactive ? b.interactive : !0,
            velocity: this.setVelocity(b.speed),
            density: this.j(b.density)
        }, this.init()
    }, b.prototype.init = function () {
        if (this.k = document.createElement("div"), this.i.appendChild(this.k), this.l(this.k, {
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                "z-index": 1
            }), /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.background)) this.l(this.k, {background: this.options.background}); else {
            if (!/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.options.background)) return console.error("Please specify a valid background image or hexadecimal color"), !1;
            this.l(this.k, {
                background: 'url("' + this.options.background + '") no-repeat center',
                "background-size": "cover"
            })
        }
        if (!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.particleColor)) return console.error("Please specify a valid particleColor hexadecimal color"), !1;
        this.canvas = document.createElement("canvas"), this.i.appendChild(this.canvas), this.g = this.canvas.getContext("2d"), this.canvas.width = this.i.size.width, this.canvas.height = this.i.size.height, this.l(this.i, {position: "relative"}), this.l(this.canvas, {
            "z-index": "20",
            position: "relative"
        }), window.addEventListener("resize", function () {
            return this.i.offsetWidth === this.i.size.width && this.i.offsetHeight === this.i.size.height ? !1 : (this.canvas.width = this.i.size.width = this.i.offsetWidth, this.canvas.height = this.i.size.height = this.i.offsetHeight, clearTimeout(this.m), void(this.m = setTimeout(function () {
                this.o = [];
                for (var a = 0; a < this.canvas.width * this.canvas.height / this.options.density; a++) this.o.push(new c(this));
                this.options.interactive && this.o.push(this.p), requestAnimationFrame(this.update.bind(this))
            }.bind(this), 500)))
        }.bind(this)), this.o = [];
        for (var a = 0; a < this.canvas.width * this.canvas.height / this.options.density; a++) this.o.push(new c(this));
        this.options.interactive && (this.p = new c(this), this.p.velocity = {
            x: 0,
            y: 0
        }, this.o.push(this.p), this.canvas.addEventListener("mousemove", function (a) {
            this.p.x = a.clientX - this.canvas.offsetLeft, this.p.y = a.clientY - this.canvas.offsetTop
        }.bind(this)), this.canvas.addEventListener("mouseup", function (a) {
            this.p.velocity = {
                x: (Math.random() - .5) * this.options.velocity,
                y: (Math.random() - .5) * this.options.velocity
            }, this.p = new c(this), this.p.velocity = {x: 0, y: 0}, this.o.push(this.p)
        }.bind(this))), requestAnimationFrame(this.update.bind(this))
    }, b.prototype.update = function () {
        this.g.clearRect(0, 0, this.canvas.width, this.canvas.height), this.g.globalAlpha = 1;
        for (var a = 0; a < this.o.length; a++) {
            this.o[a].update(), this.o[a].h();
            for (var b = this.o.length - 1; b > a; b--) {
                var c = Math.sqrt(Math.pow(this.o[a].x - this.o[b].x, 2) + Math.pow(this.o[a].y - this.o[b].y, 2));
                c > 120 || (this.g.beginPath(), this.g.strokeStyle = this.options.particleColor, this.g.globalAlpha = (120 - c) / 120, this.g.lineWidth = .7, this.g.moveTo(this.o[a].x, this.o[a].y), this.g.lineTo(this.o[b].x, this.o[b].y), this.g.stroke())
            }
        }
        0 !== this.options.velocity && requestAnimationFrame(this.update.bind(this))
    }, b.prototype.setVelocity = function (a) {
        return "fast" === a ? 1 : "slow" === a ? .33 : "none" === a ? 0 : .66
    }, b.prototype.j = function (a) {
        return "high" === a ? 5e3 : "low" === a ? 2e4 : isNaN(parseInt(a, 10)) ? 1e4 : a
    }, b.prototype.l = function (a, b) {
        for (var c in b) a.style[c] = b[c]
    }, b
});

// Initialisation

var canvasDiv = document.getElementById('particle-canvas');
var options = {
    particleColor: '#888',
    background: 'assets/images/background.png',
    interactive: true,
    speed: 'medium',
    density: 'medium'
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);


$(document).ready(function () {

    var mediaRecorder;
    var video_id = '';
    var videosContainer = document.getElementsByClassName('counter');
    var mediaConstraints = {
        audio: true, //!IsOpera && !IsEdge, // record both audio/video in Firefox/Chrome
        video: true
    };

    function captureUserMedia(mediaConstraints, successCallback, errorCallback) {
        navigator.mediaDevices.getUserMedia(mediaConstraints).then(successCallback).catch(errorCallback);
    }

    function onMediaSuccess(stream) {
        var video = document.createElement('video');

        var videoWidth = ($('.counter').width() - 30 || 320) * .75;
        var videoHeight = ($('.counter').height() - 40 || 240)* .75;

        video = mergeProps(video, {
            controls: false,
            muted: true,
            width: videoWidth,
            height: videoHeight
        });
        video.srcObject = stream;
        video.play();
        $(videosContainer).children("h2:first").hide();
        $(videosContainer).append(video);


        mediaRecorder = new MediaStreamRecorder(stream);
        mediaRecorder.stream = stream;

        // don't force any mimeType; use above "recorderType" instead.
        // mediaRecorder.mimeType = 'video/wav'; // video/webm or video/mp4
        mediaRecorder.recorderType = MediaRecorderWrapper;
        mediaRecorder.videoWidth = videoWidth;
        mediaRecorder.videoHeight = videoHeight;
        var saved = false;

        mediaRecorder.ondataavailable = function (blob) {
            $(videosContainer).children("video:first").remove();
            //here we stop recording also if any event needs to be fired for video end we ccan use it to do this
            if (saved) {
                return;
            }

            saved = true;
            //console.info('blob', blob);
            var blobUrl = URL.createObjectURL(blob);

            var xhr = new XMLHttpRequest;
            xhr.responseType = 'blob';

            var reader = new FileReader;

            xhr.onload = function () {
                var recoveredBlob = xhr.response;

                reader.onload = function () {
                    // rerun saved video

                    var blobAsDataUrl = reader.result;
                    //console.log(blobAsDataUrl);
                    //window.location = blobAsDataUrl;
                    $.ajax({
                        type: "POST",
                        url: 'save_video.php',
                        data: {'type': QuestionIndex, 'video': blobAsDataUrl.split(',')[1]},
                        success: function (response) {
                            //alert(JSON.stringify(response));
                           //console.log(JSON.stringify(response));
                            var obj = JSON.parse(response);
                            video_id = obj['video_id'];

                            videoURL = video_id;

                            $('#main').slideUp(400);
                            $('.section.sec-bottom').slideDown(400);
                            $('#particle-canvas').toggle();
                        },
                        error: function (response) {
                            alert(JSON.stringify(response));
                        }
                    });

                };

                reader.readAsDataURL(recoveredBlob);
            };

            xhr.open('GET', blobUrl);
            xhr.send();
            // video.pause();

            //$(videosContainer).remove();
            mediaRecorder.stop();

            // stop using camera
            for (track of stream.getTracks()) {
                  track.stop();
            }

        };


        // get blob after specific time interval
        var seconds = total_time_seconds - 1;
        var timer = setInterval(function () {
            $('.clock-inner').html('00:' + ((seconds < 10) ? '0' + seconds : seconds ));
            seconds--;
            if (seconds < 0) {
                clearInterval(timer);
                $('.clock').hide();
                $('.clock-inner').html('00:40');
            }
        }, 1000);
        mediaRecorder.start(total_time_seconds * 1000);
    }

    function onMediaError(e) {
        console.error('media error', e);
    }

    $('.questions li a').on('click', function (event) {
        event.preventDefault();
        $('.counter').css("display","block");
        $('.number').show();
        $('.clock').show();
        $(videosContainer).children("h2:first").show();
        var getQuestionIndex = $(this).attr('data-question');
        QuestionIndex = getQuestionIndex;
        $('.questions, .ini-title').hide();
        $('.counter').fadeIn(300);
        $('.q-single[data-question="' + getQuestionIndex + '"]').fadeIn(400);
        var waiting = waiting_time_seconds - 1;
        var timer = setInterval(function () {
            $('.number').html(waiting);
            waiting -= 1;
            if (waiting < 0) {
                clearInterval(timer);
                $('.number').html('3').hide();
                captureUserMedia(mediaConstraints, onMediaSuccess, onMediaError);
            }

        }, 1000);
    });

    $('#go-next').on('click', function (event) {
        event.preventDefault();

                     $('.sec-top, #particle-canvas').slideUp(400);
                     $('#main').slideDown(400);
                     
                     $('.counter').css("display","none");
                     $('.questions').css("display","block");
    });

    $(".watch-replay").on('click', function (event) {
        event.preventDefault();

        $('.thankyou-section .main-content').toggle();

        var video = document.createElement('video');

        var videoWidth = ($('.thankyou-section').width() - 30 || 320) * .75;
        var videoHeight = ($('.thankyou-section').height() - 40 || 240) * .75;

        video = mergeProps(video, {
            controls: true,
            muted: false,
            width: videoWidth,
            height: videoHeight
        });

        video.src = videoURL;
        video.play();

        var crossIcon = '<div class="cross-icon pull-right" style="background-color: white" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABRUlEQVQ4T63USUpEMRDG8X+v1PvoGXrh3glth4ULF4IgXsKFSiMiOIvzgK7Es9mKfJCSMl3Je4JZdiW/1EtVdYd/Xh3njQIHwBtw3/KeFWACWAc+dMZAYS9AF/gC5oGbBnQVOEx7noBZoQaeAz0HNKEes2N9ZWqgMrpwGWuT0AXgOss0wj6BKeDZv+EScBKgyvwqoSVMn/vg39CSWAaOA3QNGAN2smyV2Q8WgfpNlTvK0Kg+Q1gJbIOGWA1UTL21V2gdvetlFPNFyeObwHYB1Fuf/QVUEfYrjV3s0yjDJszuCdEcjDAVQJVX22jW/Zmh5vfBEjYDPKa0FoHTWvMbGE3AABCmwferhM4BdwbqVo2erRJm8QjdBTYMHEmZTALCpjXolSor5NHb9Ecy8G8oVLP6Drw2YBbWZ44DWymRXxVradS3fQPJ71AVG4hrnAAAAABJRU5ErkJggg==" /></div>';

        $(".thankyou-section .video-content").append(crossIcon);
        $(".thankyou-section .video-content").append(video);

    });

    $('.thankyou-section').on('click', '.cross-icon', function () {
        $(".thankyou-section .video-content").empty();
        $('.thankyou-section .main-content').toggle();
    });

    $('.thankyou-main-logo').on('click', function (event) {
        $('.section.sec-bottom').slideUp(400);
        $('.sec-top').slideDown(400);
    });
});
