

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    themeSystem: 'bootstrap5',
    headerToolbar: {
      start: 'today prev,next', // will normally be on the left. if RTL, will be on the right
      center: 'title',
      end: 'dayGridMonth,timeGridWeek,listWeek' // will normally be on the right. if RTL, will be on the left
    }
  });
  calendar.render();
});