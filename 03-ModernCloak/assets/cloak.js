
var date = new Date();
var radian = 0.01745329251

var converter = {
    'hours' : 0.52359877559,
    'minutes' : 0.10471975512,
    'seconds' : 0.10471975512
};

function Beautify(time) {
    if (time < 10) {
        return '0' + time;
    }
    return time
}

function Cloak() {
    var hours = [date.getHours(), -HALF_PI + (0.523599 * date.getHours())];
    var minutes = [date.getMinutes(), -HALF_PI + (0.10472 * date.getMinutes())];
    var seconds = [date.getSeconds(), -HALF_PI + (0.10472 * date.getSeconds())];

    this.show = function(red, green, blue) {
        strokeWeight(10);
        if (seconds[1] != -HALF_PI) {
            stroke(red, green, blue);
            this.second_arc = arc(500, 400, 350, 350, -HALF_PI, seconds[1]);
        }
        if (minutes[1] != -HALF_PI) {
            stroke(red+30, green+30, blue+30);
            this.minute_arc = arc(500, 400, 300, 300, -HALF_PI, minutes[1]);
        }
        if (hours[1] != -HALF_PI) {
            stroke(red+60, green+60, blue+60);
            this.hour_arc = arc(500, 400, 250, 250, -HALF_PI, hours[1]);
        }

        fill(25);
        stroke(220);
        let coolDate = Beautify(hours[0]) + ':' + Beautify(minutes[0]) + ':' + Beautify(seconds[0]);
        text(coolDate, 500, 400);
    }

    this.update = function() {
        seconds[0] += 1;
        seconds[1] += converter['seconds'];

        if (seconds[0] === 60) {
            minutes[0] += 1;
            minutes[1] += converter['minutes'];
            seconds[0] = 0;

            if (minutes[0] === 60) {
                hours[0] += 1;
                hours[1] += converter['hours'];
                minutes[0] = 0;

                if (hours[0] === 24) {
                    hours[0] = 0;
                }
            }
        }
    }
}