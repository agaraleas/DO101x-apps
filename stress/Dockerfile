FROM registry.access.redhat.com/rhscl/httpd-24-rhel7

CMD echo benchmarking host: ${SCALE_SERVICE_HOST}; \
    echo benchmarking port: ${SCALE_SERVICE_PORT}; \
    ab -dSrk -c 20 -n 50000000 http://${SCALE_SERVICE_HOST}:${SCALE_SERVICE_PORT}/index.php
