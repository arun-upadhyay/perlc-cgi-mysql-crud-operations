#!"C:\Perl64\bin\perl.exe"
use warnings;
use CGI;
use DBI;
use JSON;
print "Content-Type: text/html\n\n";
my $driver = "mysql"; 
my $database = "appointmentdb";
my $dsn = "DBI:$driver:database=$database";
my $userid = "root";
my $password = "root";
my $port = "3307";
my $host = "localhost";
			print "hi";			
	my $dsn = "dbname=$dbname;host=$host;port=$port";
    my $obj = DBIx::JSON->new($dsn, "mysql", $dbusername, $dbpasswd);
    $obj->do_select("select * from appointments;", "colmun1", 1);
    $obj->err && die $obj->errstr;
    print $obj->get_json;