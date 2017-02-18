#!"C:\Perl64\bin\perl.exe"
use warnings;
use CGI;
use DBI;
print "Content-Type: text/html\n\n";
#Getting values from the CGI Environment variable.
my $q = CGI::Vars();
my $dt = $q->{Date};
my $tm = $q->{Time};
my $des = $q->{Description};
#remove trailing spaces using regular expression
$dt =~ s/^\s*(.*?)\s*$/$1/;
$tm =~ s/^\s*(.*?)\s*$/$1/;
$des =~ s/^\s*(.*?)\s*$/$1/;
#Database operation using perl
my $driver = "mysql"; 
my $database = "appointmentdb";
my $dsn = "DBI:$driver:database=$database";
my $userid = "root";
my $password = "root";
#Connection to the database
my $dbh = DBI->connect($dsn, $userid, $password ) or die $DBI::errstr;
#Insert records to the databse;
my $sth = $dbh->prepare("INSERT INTO appointments
                       (dt, tm, des)
                        values
                       ('$dt', '$tm', '$des')");
$sth->execute() or die $DBI::errstr;
$sth->finish();
# redirect to home page
print "<META HTTP-EQUIV=refresh CONTENT=\"1;URL=../index.html\">\n";
$dbh->commit or die $DBI::errstr;

