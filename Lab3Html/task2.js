let video=document.getElementById("myvideo");
        let allbutton=document.querySelectorAll("input[type='button']");
        let list=document.getElementsByClassName("list")[0];
        let video_arr=["universe.mp4","desny.mp4","universe.mp4","desny.mp4","universe.mp4","desny.mp4"]
        list.addEventListener("click",function(e){
            if(e.target.type=="button"){
                let currentbutton=parseInt(e.target.id)-1
                video.src=video_arr[currentbutton]
                console.log(video.src)

            }
        });
        video.addEventListener("click",function(){
            if (video.paused) {
                video.play();
            } else {
                video.pause(); 
            }
        })
        video.addEventListener("dblclick",function(){
            video.requestFullscreen();
            
        }
        )