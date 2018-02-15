"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Options_model_1 = require("./Options.model");
var Question = /** @class */ (function () {
    function Question(data) {
        var _this = this;
        data = data || {};
        this.id = data.id;
        this.name = data.name;
        this.questionTypeId = data.questionTypeId;
        this.options = [];
        this.UID = data.UID;
        data.options.forEach(function (o) {
            _this.options.push(new Options_model_1.Options(o));
        });
    }
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVlc3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJRdWVzdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUF3QztBQUN4QztJQVFJLGtCQUFZLElBQVM7UUFBckIsaUJBVUg7UUFUTyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksdUJBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELGVBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDO0FBbkJZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPcHRpb25zfSBmcm9tIFwiLi9PcHRpb25zLm1vZGVsXCI7XHJcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbiB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgcXVlc3Rpb25UeXBlSWQ6IHN0cmluZztcclxuICAgIG9wdGlvbnM6IE9wdGlvbnNbXTtcclxuICAgIGFuc3dlcmVkOiBib29sZWFuO1xyXG4gICAgVUlEOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGF0YTogYW55KSB7XHJcbiAgICAgICAgZGF0YSA9IGRhdGEgfHwge307XHJcbiAgICAgICAgdGhpcy5pZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25UeXBlSWQgPSBkYXRhLnF1ZXN0aW9uVHlwZUlkO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuVUlEID0gZGF0YS5VSUQ7XHJcbiAgICAgICAgZGF0YS5vcHRpb25zLmZvckVhY2gobyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKG5ldyBPcHRpb25zKG8pKTtcclxuICAgICAgICB9KTtcclxufVxyXG59Il19