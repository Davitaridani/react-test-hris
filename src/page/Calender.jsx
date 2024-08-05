import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import FullCalendar from '@fullcalendar/react'; // Import the FullCalendar component
import dayGridPlugin from '@fullcalendar/daygrid'; // Import the dayGrid plugin
// import EventIcon from '@mui/icons-material/Event'; // Import the Event icon from Material-UI
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function CalendarCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Calendar
        </Typography>
        <div style={{ height: '600px' }}> {/* Sesuaikan tinggi dengan keinginan Anda */}
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={[
              { title: 'Event 1', date: '2024-03-01' },
              { title: 'Event 2', date: '2024-03-05' },
              { title: 'Event 3', date: '2024-03-15', classNames: ['holiday'] } // Menambahkan kelas 'holiday' untuk menandai tanggal libur
            ]}
            nowIndicator={true}
            height="100%"
            dayCellContent={renderDay} // Menyesuaikan tampilan isi sel tanggal
            eventContent={renderEventContent} // Menyesuaikan tampilan konten acara (event)
            showNonCurrentDates={false} // Menyembunyikan tanggal di luar bulan saat ini
          />
        </div>
      </CardContent>
    </Card>
  );
}

// Fungsi untuk menyesuaikan tampilan isi sel tanggal
function renderDay({ date }) {
  return (
    <>
      <span>{date.getDate()}</span>
      {/* Jika Anda ingin menambahkan informasi tambahan di setiap sel tanggal, Anda dapat melakukannya di sini */}
    </>
  );
}

// Fungsi untuk menyesuaikan tampilan konten acara (event)
function renderEventContent(eventInfo) {
  if (eventInfo.event.classNames.includes('holiday')) {
    return (
      <>
        <FiberManualRecordIcon style={{ color: 'red' }} /> {/* Tambahkan icon titik merah */}
        <span>{eventInfo.timeText}</span> {/* Menampilkan waktu acara (event) */}
      </>
    );
  } else {
    return (
      <span>{eventInfo.timeText}</span>
    );
  }
}

export default CalendarCard;
